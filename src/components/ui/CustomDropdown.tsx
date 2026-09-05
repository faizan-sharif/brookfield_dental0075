'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, User, Stethoscope, Sparkles } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  subtitle?: string;
  icon?: React.ElementType;
}

interface CustomDropdownProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  options: DropdownOption[];
  icon?: React.ElementType;
  className?: string;
}

export function CustomDropdown({
  label,
  value,
  onChange,
  options,
  icon: IconComponent,
  className = '',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find currently selected option
  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative select-none ${isOpen ? 'z-50' : 'z-10'} ${className}`}>
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-slate-50 hover:bg-slate-100/80 border transition-all duration-200 rounded-xl p-2.5 flex items-center justify-between gap-2 cursor-pointer ${
          isOpen ? 'border-brand-500 ring-2 ring-brand-500/20 bg-white shadow-sm' : 'border-slate-200/80'
        }`}
      >
        <div className="flex items-center gap-2.5 overflow-hidden w-full">
          {IconComponent && (
            <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
              <IconComponent className="w-4 h-4" />
            </div>
          )}

          <div className="text-left truncate w-full">
            {label && (
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                {label}
              </span>
            )}
            <span className="block text-xs font-bold text-navy-900 truncate">
              {selectedOption ? selectedOption.label : value}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 shrink-0 pr-0.5"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Floating Animated Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full mt-2 z-[999] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 overflow-hidden max-h-64 overflow-y-auto backdrop-blur-xl"
          >
            <div className="space-y-1">
              {options.map((option) => {
                const isSelected = option.value === value;
                const ItemIcon = option.icon || IconComponent;

                return (
                  <div
                    key={option.value}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'bg-brand-50 text-brand-700 font-bold border border-brand-200/70 shadow-sm'
                        : 'hover:bg-slate-50 text-slate-700 hover:text-navy-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {ItemIcon && (
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                            isSelected
                              ? 'bg-brand-500 text-white'
                              : 'bg-slate-100 text-slate-500 group-hover:text-navy-900'
                          }`}
                        >
                          <ItemIcon className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div className="truncate">
                        <div className="text-xs font-bold leading-tight truncate">
                          {option.label}
                        </div>
                        {option.subtitle && (
                          <div className="text-[10px] text-slate-400 font-medium leading-tight truncate mt-0.5">
                            {option.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

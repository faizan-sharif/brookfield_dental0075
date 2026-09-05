'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { ThreeDToothCanvas } from './ThreeDToothCanvas';
import { getAIAssistantResponse } from '@/lib/aiAssistant';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    {
      text: `Hi! Welcome to Brookfield Dental Associates. I can help with our doctors, clinic hours, location, services, implants, pricing, and booking an appointment. How can I help you today?`,
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { text: query, isBot: false }];
    setMessages(newMessages);
    if (!textToSend) setInput('');

    // Instant smart response mapping
    setTimeout(() => {
      const botReply = getAIAssistantResponse(query);
      setMessages((prev) => [...prev, { text: botReply, isBot: true }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[calc(100vw-2rem)] max-w-[360px] sm:w-96 h-[460px] glass-card-dark bg-slate-900/95 rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden mb-3 sm:mb-4"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-brand-600 to-navy-900 text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-brand-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Brookfield Assistant</h4>
                  <p className="text-[11px] text-brand-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Online • Quick Answers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Pills */}
            <div className="px-3 py-2 bg-slate-800/80 border-b border-white/5 flex gap-1.5 overflow-x-auto text-[11px]">
              <button
                onClick={() => handleSend('What are your special offers?')}
                className="px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 hover:bg-brand-500/30 whitespace-nowrap transition-colors"
              >
                🎁 Special Offers
              </button>
              <button
                onClick={() => handleSend('Tell me about Dental Implants')}
                className="px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10 hover:bg-white/20 whitespace-nowrap transition-colors"
              >
                🦷 Dental Implants
              </button>
              <button
                onClick={() => handleSend('What are your office hours?')}
                className="px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10 hover:bg-white/20 whitespace-nowrap transition-colors"
              >
                ⏰ Hours & Location
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm whitespace-pre-line leading-relaxed ${
                      msg.isBot
                        ? 'bg-slate-800 text-slate-200 border border-white/10 rounded-tl-none shadow-sm'
                        : 'bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-tr-none shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-slate-950/80 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 bg-white/10 border border-white/15 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-400"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-full shadow-glow-teal border border-brand-300/30 cursor-pointer"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex items-center justify-center shrink-0 pointer-events-none">
          <ThreeDToothCanvas className="w-9 h-9 sm:w-10 sm:h-10" autoRotate={true} showBadge={false} />
        </div>
        <span className="text-sm font-semibold hidden sm:inline">Ask AI Assistant</span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
      </motion.button>
    </div>
  );
}

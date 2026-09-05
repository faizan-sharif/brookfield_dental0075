'use client';

import React, { useState, useEffect } from 'react';
import {
  getStoredBookings,
  updateBookingStatus,
  deleteBooking,
  BookingRecord,
  saveBooking,
} from '@/lib/bookingStore';
import { bookingDoctors } from '@/data/team';
import {
  Search,
  Filter,
  CheckCircle,
  Clock,
  XCircle,
  Trash2,
  Download,
  Plus,
  Calendar,
  User,
  Phone,
  Mail,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [doctorFilter, setDoctorFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // New manual booking state for reception staff
  const [newManual, setNewManual] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: 'Dr. Ahmad Hawasli',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM',
    service: 'Free Oral Consultation',
    notes: 'Walk-in / Phone booking',
  });

  const loadData = () => {
    setBookings(getStoredBookings());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = (id: string, status: BookingRecord['status']) => {
    const updated = updateBookingStatus(id, status);
    setBookings(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm(`Are you sure you want to delete appointment ${id}?`)) {
      const updated = deleteBooking(id);
      setBookings(updated);
    }
  };

  const handleAddManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBooking(newManual);
    loadData();
    setShowAddModal(false);
  };

  const handleExportCSV = () => {
    const headers = ['Booking ID', 'Patient Name', 'Phone', 'Email', 'Doctor', 'Service', 'Date', 'Time Slot', 'Status', 'Notes'];
    const rows = filteredBookings.map((b) => [
      b.id,
      `"${b.name}"`,
      `"${b.phone}"`,
      `"${b.email}"`,
      `"${b.doctor}"`,
      `"${b.service}"`,
      b.date,
      b.timeSlot,
      b.status,
      `"${b.notes || ''}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `brookfield_appointments_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtering Logic
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.doctor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    const matchesDoctor = doctorFilter === 'All' || b.doctor === doctorFilter;

    return matchesSearch && matchesStatus && matchesDoctor;
  });

  // Metrics
  const totalCount = bookings.length;
  const pendingCount = bookings.filter((b) => b.status === 'Pending').length;
  const confirmedCount = bookings.filter((b) => b.status === 'Confirmed').length;
  const todayDateStr = new Date().toISOString().split('T')[0];
  const todayCount = bookings.filter((b) => b.date === todayDateStr).length;

  return (
    <div className="pt-28 pb-20 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge-cyan">RECEPTION PORTAL</span>
              <span className="text-xs text-slate-400 font-semibold">• Live Storage Synchronized</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-navy-900">
              Appointments Management Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage patient bookings, approve pending slots, and export clinic schedules.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors font-bold text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>

            <button
              onClick={handleExportCSV}
              className="py-3 px-4 bg-white border border-slate-200 text-navy-900 rounded-xl hover:bg-slate-50 transition-colors font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-4 h-4 text-brand-500" /> Export CSV
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="py-3 px-5 btn-cyan text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Walk-In Patient
            </button>
          </div>
        </div>

        {/* Overview Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Total Appointments
            </span>
            <span className="text-3xl font-black text-navy-900">{totalCount}</span>
            <span className="text-[11px] text-slate-500 block mt-1">All time records</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 bg-amber-50/30 shadow-sm">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
              Pending Approvals
            </span>
            <span className="text-3xl font-black text-amber-600">{pendingCount}</span>
            <span className="text-[11px] text-amber-600 block mt-1">Awaiting confirmation</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 shadow-sm">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Confirmed Bookings
            </span>
            <span className="text-3xl font-black text-emerald-600">{confirmedCount}</span>
            <span className="text-[11px] text-emerald-600 block mt-1">Ready for appointment</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-brand-200 bg-brand-50/30 shadow-sm">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-1">
              Today's Queue
            </span>
            <span className="text-3xl font-black text-brand-600">{todayCount}</span>
            <span className="text-[11px] text-brand-600 block mt-1">Scheduled for today</span>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patient, phone, ID, doctor..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none focus:border-brand-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Status Filter */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
              {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    statusFilter === st
                      ? 'bg-white text-navy-900 shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Doctor Filter */}
            <select
              value={doctorFilter}
              onChange={(e) => setDoctorFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none cursor-pointer"
            >
              <option value="All">All Doctors</option>
              {bookingDoctors.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Appointments Data Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  <th className="p-4">ID</th>
                  <th className="p-4">Patient Info</th>
                  <th className="p-4">Doctor</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Date & Time</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-slate-400 font-semibold">
                      No appointments matching current search filters.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-mono font-bold text-brand-600">{b.id}</td>

                      <td className="p-4">
                        <span className="font-extrabold text-navy-900 block">{b.name}</span>
                        <span className="text-slate-500 font-medium block text-[11px]">
                          {b.phone} • {b.email || 'No email'}
                        </span>
                      </td>

                      <td className="p-4 font-bold text-navy-900">{b.doctor}</td>

                      <td className="p-4">
                        <span className="font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                          {b.service}
                        </span>
                      </td>

                      <td className="p-4 font-bold text-navy-900">
                        <span className="block">{b.date}</span>
                        <span className="text-brand-600 font-semibold text-[11px]">{b.timeSlot}</span>
                      </td>

                      <td className="p-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold ${
                            b.status === 'Confirmed'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : b.status === 'Pending'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : b.status === 'Completed'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}
                        >
                          {b.status}
                        </span>
                      </td>

                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {b.status === 'Pending' && (
                            <button
                              onClick={() => handleStatusChange(b.id, 'Confirmed')}
                              className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-lg border border-emerald-200 text-[11px] transition-colors"
                            >
                              Confirm
                            </button>
                          )}

                          {b.status === 'Confirmed' && (
                            <button
                              onClick={() => handleStatusChange(b.id, 'Completed')}
                              className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-lg border border-blue-200 text-[11px] transition-colors"
                            >
                              Complete
                            </button>
                          )}

                          {b.status !== 'Cancelled' && b.status !== 'Completed' && (
                            <button
                              onClick={() => handleStatusChange(b.id, 'Cancelled')}
                              className="px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded-lg border border-amber-200 text-[11px] transition-colors"
                            >
                              Cancel
                            </button>
                          )}

                          <button
                            onClick={() => handleDelete(b.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Walk-In Patient Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-extrabold text-navy-900">Add Walk-In / Phone Booking</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAddManualSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-navy-900 mb-1">Patient Name *</label>
                <input
                  type="text"
                  required
                  value={newManual.name}
                  onChange={(e) => setNewManual({ ...newManual, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-navy-900 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newManual.phone}
                    onChange={(e) => setNewManual({ ...newManual, phone: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-navy-900 mb-1">Email</label>
                  <input
                    type="email"
                    value={newManual.email}
                    onChange={(e) => setNewManual({ ...newManual, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-navy-900 mb-1">Doctor</label>
                  <select
                    value={newManual.doctor}
                    onChange={(e) => setNewManual({ ...newManual, doctor: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy-900"
                  >
                    {bookingDoctors.map((d) => (
                      <option key={d.name} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-navy-900 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newManual.date}
                    onChange={(e) => setNewManual({ ...newManual, date: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-navy-900"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full py-3 btn-cyan text-xs font-bold uppercase">
                  Add Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

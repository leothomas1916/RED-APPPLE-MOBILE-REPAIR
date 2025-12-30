import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Search, 
  Plus, 
  MoreVertical,
  CheckCircle,
  Clock,
  Wrench,
  AlertCircle,
  IndianRupee,
  Smartphone,
  Calendar,
  X,
  Save
} from 'lucide-react';
import { storageService, Booking } from '../services/storageService';
import { useNavigate } from 'react-router-dom';

// Simple Login Component
const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded demo password
    if (password === 'admin123') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-500">Red Apple Mobile Repair</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Enter admin password (admin123)"
            />
          </div>
          {error && <p className="text-red-600 text-sm">Invalid password. Try 'admin123'</p>}
          <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings' | 'kanban'>('dashboard');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, inProgress: 0, completed: 0, revenue: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
    }
  }, [isAuthenticated]);

  const refreshData = () => {
    setBookings(storageService.getBookings());
    setStats(storageService.getStats());
  };

  const handleStatusChange = (id: string, newStatus: any) => {
    storageService.updateBooking(id, { status: newStatus });
    refreshData();
  };

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBooking) {
      storageService.updateBooking(editingBooking.id, {
        quote: Number(editingBooking.quote),
        notes: editingBooking.notes
      });
      setEditingBooking(null);
      refreshData();
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  const filteredBookings = bookings.filter(b => 
    b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed h-full z-10 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Settings className="text-red-500" /> CRM Admin
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'dashboard' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('kanban')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'kanban' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
          >
            <Clock size={20} /> Repair Board
          </button>
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'bookings' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
          >
            <Users size={20} /> All Bookings
          </button>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white transition-colors">
            <LogOut size={20} /> Back to Website
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold capitalize">{activeTab.replace('-', ' ')} Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search bookings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
              A
            </div>
          </div>
        </header>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-green-100 rounded-xl text-green-600">
                    <IndianRupee size={24} />
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
                </div>
                <p className="text-gray-500 text-sm">Total Revenue</p>
                <h3 className="text-2xl font-bold">₹{stats.revenue.toLocaleString()}</h3>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                    <Clock size={24} />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">Active Repairs</p>
                <h3 className="text-2xl font-bold">{stats.inProgress}</h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Users size={24} />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">Pending Requests</p>
                <h3 className="text-2xl font-bold">{stats.pending}</h3>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                    <CheckCircle size={24} />
                  </div>
                </div>
                <p className="text-gray-500 text-sm">Completed</p>
                <h3 className="text-2xl font-bold">{stats.completed}</h3>
              </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-lg">Recent Bookings</h3>
                <button onClick={() => setActiveTab('bookings')} className="text-red-600 text-sm font-semibold hover:underline">View All</button>
              </div>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Device</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.slice(0, 5).map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-mono text-gray-500">#{booking.id}</td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                        <div className="text-xs text-gray-500">{booking.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Smartphone size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">{booking.device}</span>
                        </div>
                        <div className="text-xs text-gray-500">{booking.issue}</div>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={booking.status} />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {booking.quote > 0 ? `₹${booking.quote}` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Kanban Board View */}
        {activeTab === 'kanban' && (
          <div className="flex gap-6 overflow-x-auto pb-6">
            {['Pending', 'Diagnostics', 'In Progress', 'Ready', 'Completed'].map((status) => (
              <div key={status} className="min-w-[300px] bg-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-700">{status}</h3>
                  <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
                    {bookings.filter(b => b.status === status).length}
                  </span>
                </div>
                <div className="space-y-3">
                  {bookings.filter(b => b.status === status).map(booking => (
                    <div key={booking.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-mono text-gray-400">#{booking.id}</span>
                        <div className="flex gap-1">
                            <button 
                                onClick={() => setEditingBooking(booking)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-500"
                            >
                                <Settings size={14} />
                            </button>
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{booking.device}</h4>
                      <p className="text-xs text-red-600 mb-3">{booking.issue}</p>
                      
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                        <span>{booking.customerName}</span>
                        <span>{booking.date}</span>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex gap-2 mt-2 pt-2 border-t border-gray-50">
                        {status !== 'Completed' && (
                          <button 
                             onClick={() => handleStatusChange(booking.id, getNextStatus(status))}
                             className="flex-1 bg-gray-900 text-white text-xs py-1.5 rounded hover:bg-gray-800 transition-colors"
                          >
                            Move Next
                          </button>
                        )}
                        {status !== 'Pending' && (
                          <button 
                             onClick={() => handleStatusChange(booking.id, getPrevStatus(status))}
                             className="px-2 bg-gray-100 text-gray-600 text-xs py-1.5 rounded hover:bg-gray-200 transition-colors"
                          >
                            Back
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All Bookings Table View */}
        {activeTab === 'bookings' && (
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Device</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Quote</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                       <td className="px-6 py-4">
                          <button 
                            onClick={() => setEditingBooking(booking)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Edit
                          </button>
                       </td>
                       <td className="px-6 py-4">
                         <select 
                           value={booking.status}
                           onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                           className="text-xs border border-gray-200 rounded p-1 bg-white"
                         >
                           {['Pending', 'Diagnostics', 'In Progress', 'Ready', 'Completed', 'Cancelled'].map(s => (
                             <option key={s} value={s}>{s}</option>
                           ))}
                         </select>
                       </td>
                       <td className="px-6 py-4 text-sm">
                          <div className="font-medium text-gray-900">{booking.customerName}</div>
                          <div className="text-gray-500 text-xs">{booking.phone}</div>
                       </td>
                       <td className="px-6 py-4 text-sm">
                          <div className="text-gray-900">{booking.device}</div>
                          <div className="text-red-600 text-xs">{booking.issue}</div>
                       </td>
                       <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {booking.notes || '-'}
                       </td>
                       <td className="px-6 py-4 text-sm font-bold text-gray-900">
                          {booking.quote ? `₹${booking.quote}` : 'TBD'}
                       </td>
                    </tr>
                  ))}
                </tbody>
             </table>
           </div>
        )}

        {/* Edit Modal */}
        {editingBooking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Edit Repair Details</h3>
                <button onClick={() => setEditingBooking(null)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleEditSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quote Amount (₹)</label>
                  <input 
                    type="number" 
                    value={editingBooking.quote || ''}
                    onChange={(e) => setEditingBooking({...editingBooking, quote: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Technician Notes</label>
                  <textarea 
                    value={editingBooking.notes || ''}
                    onChange={(e) => setEditingBooking({...editingBooking, notes: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none h-32 resize-none"
                    placeholder="Diagnostic details, parts needed, etc."
                  />
                </div>
                <div className="flex gap-4 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setEditingBooking(null)}
                    className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Save size={18} /> Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Helper Components
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Pending': 'bg-gray-100 text-gray-600',
    'Diagnostics': 'bg-blue-100 text-blue-600',
    'In Progress': 'bg-orange-100 text-orange-600',
    'Ready': 'bg-purple-100 text-purple-600',
    'Completed': 'bg-green-100 text-green-600',
    'Cancelled': 'bg-red-50 text-red-600'
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${styles[status] || styles['Pending']}`}>
      {status}
    </span>
  );
};

const getNextStatus = (current: string) => {
  const flow = ['Pending', 'Diagnostics', 'In Progress', 'Ready', 'Completed'];
  const idx = flow.indexOf(current);
  return idx < flow.length - 1 ? flow[idx + 1] : current;
};

const getPrevStatus = (current: string) => {
  const flow = ['Pending', 'Diagnostics', 'In Progress', 'Ready', 'Completed'];
  const idx = flow.indexOf(current);
  return idx > 0 ? flow[idx - 1] : current;
};
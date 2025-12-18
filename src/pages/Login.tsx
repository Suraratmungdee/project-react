import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { validateRequired } from '../utils/validation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State สำหรับเก็บ Error message
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // ล้าง Error เดิมก่อน

    // เช็คค่าว่าง (Manual Check)
    if (!validateRequired(email, password)) {
      setError('Please fill in all required fields.');
      return;
    }

    // --- Mock Credentials ---
    const MOCK_EMAIL = "admin@gmail.com";
    const MOCK_PASSWORD = "123456";

    // ...existing code...
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      login();
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f6fd] p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-slate-100">
        <div className="text-center mb-8">
          <img src="/logo.svg" alt="Logo" className="h-12 mx-auto mb-4" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error Message Alert */}
          {error && (
            <div className="bg-red-50 text-red-500 text-sm p-3 rounded-xl flex items-center gap-2 animate-pulse">
              <AlertCircle size={16} />
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${error && !email
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-slate-200 focus:ring-[#3730A3] focus:border-transparent'
                  }`}
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${error && !password
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-slate-200 focus:ring-[#3730A3] focus:border-transparent'
                  }`}
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-slate-600 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded text-[#3730A3] focus:ring-[#3730A3]" />
              Remember me
            </label>
            <a href="#" className="text-[#3730A3] font-semibold hover:underline">Forgot password?</a>
          </div>

          {/* <button
            type="submit"
            className="w-full bg-[#3730A3] text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
          >
            Sign In
          </button> */}

          <Button
            className="w-full h-10 bg-[#3730A3] text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
            type="submit"
          >
            Sign In
          </Button>


        </form>
      </div>
    </div>
  );
}
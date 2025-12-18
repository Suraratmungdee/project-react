import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route: Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes: ต้อง Login ก่อนถึงจะเข้าได้ */}
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/discover" element={<ComingSoon />} />
            <Route path="/route" element={<ComingSoon />} />
            <Route path="/services" element={<ComingSoon />} />
            <Route path="/account" element={<ComingSoon />} />
            <Route path="/products" element={<ComingSoon />} />
            <Route path="/payment" element={<ComingSoon />} />
            <Route path="/inbox" element={<ComingSoon />} />
            <Route path="/reports" element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
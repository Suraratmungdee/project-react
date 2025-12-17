import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import InboxPage from './pages/InboxPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="*" element={<div className="p-10">Coming Soon...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
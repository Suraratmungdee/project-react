import React from 'react';

// component Sidebar.tsx
export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  badge?: string;
}

// page Dashboard.tsx
export interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}

export interface DashboardData {
  revenue: { value: string; change: string };
  activeUsers: { value: string; change: string };
  newOrders: { value: string; change: string };
  growthRate: { value: string; change: string };
}
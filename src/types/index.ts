export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  badge?: string;
}

export interface Message {
  id: string;
  sender: string;
  email: string;
  subject: string;
  content: string;
  time: string;
  date: string;
  avatar: string;
  isUnread: boolean;
}
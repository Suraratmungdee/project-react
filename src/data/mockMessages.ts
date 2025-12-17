export interface Message {
  id: string;
  sender: string;
  email: string;
  subject: string;
  preview: string;
  date: string;
  avatar: string;
}

export const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'Franco Johana',
    email: 'Franco.Johana@gmail.com',
    subject: 'Lorem ipsum dolor sit amet, consetetur',
    preview: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
    date: '16:11 PM, June 23, 2025',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  // เพิ่มคนอื่นๆ ได้ที่นี่
];
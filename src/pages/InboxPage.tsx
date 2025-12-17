import InboxList from '../components/InboxList';
import MessageDetail from '../components/MessageDetail';

export default function InboxPage() {
  return (
    <div className="flex h-full gap-6">
      <InboxList />
      <MessageDetail />
    </div>
  );
}
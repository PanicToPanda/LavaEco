import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Reviews() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white py-24 px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Customer Reviews</h1>
      <p className="text-xl text-slate-600 mb-12">See what our customers are saying about LavaEco.</p>
      <Link to="/">
        <Button variant="outline" className="rounded-full">Back to Home</Button>
      </Link>
    </div>
  );
}

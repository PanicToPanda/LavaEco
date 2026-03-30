import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white py-24 px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
      <p className="text-xl text-slate-600 mb-12">Find answers to common questions about our services.</p>
      <Link to="/pricing">
        <Button variant="outline" className="rounded-full">View Pricing FAQ</Button>
      </Link>
    </div>
  );
}

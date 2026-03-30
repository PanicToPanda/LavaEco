import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-emerald-50 py-24 px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">About LavaEco</h1>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">We started LavaEco because we couldn't find a dry cleaner that didn't use toxic chemicals or single-use plastic. So we built one.</p>
      <Link to="/sustainability">
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">Read Our Mission</Button>
      </Link>
    </div>
  );
}

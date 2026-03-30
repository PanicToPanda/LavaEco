import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Droplets, Wind, Zap, CheckCircle2 } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <section className="bg-emerald-900 text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Nature leaves" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Eco Mission
          </h1>
          <p className="text-xl text-emerald-100 leading-relaxed">
            We believe clean clothes shouldn't come at the cost of a dirty planet. Discover how we're revolutionizing the laundry industry.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem with Traditional Dry Cleaning</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For decades, the dry cleaning industry has relied on Perchloroethylene (PERC), a toxic solvent classified as a likely human carcinogen. It pollutes groundwater, contaminates soil, and leaves a chemical residue on your clothes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              At LavaEco, we completely eliminated PERC from our process on day one. We use advanced wet cleaning technology and liquid silicone solvents that are 100% non-toxic and biodegradable.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Eco-friendly laundry" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: 'Water Conservation',
              desc: 'Our commercial-grade machines use 40% less water than home washing machines. We also capture and recycle rinse water for future cycles.',
              icon: <Droplets className="w-10 h-10 text-emerald-600" />
            },
            {
              title: 'Energy Efficiency',
              desc: 'Our facilities are powered by 100% renewable energy. We use heat-pump dryers that consume 50% less electricity than traditional models.',
              icon: <Zap className="w-10 h-10 text-emerald-600" />
            },
            {
              title: 'Zero Plastic Waste',
              desc: 'We deliver your clothes in reusable canvas totes and use recycled paper hangers. No single-use plastic garment bags, ever.',
              icon: <Leaf className="w-10 h-10 text-emerald-600" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Join the Movement</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            By choosing LavaEco, you're not just getting cleaner clothes—you're actively reducing your carbon footprint and keeping toxic chemicals out of our water supply.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-emerald-600/20">
              Make the Switch Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

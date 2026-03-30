import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, Droplets, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <section className="bg-emerald-50 py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            How LavaEco Works
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We've removed all the friction from laundry day. Here is our simple, 4-step process.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-emerald-100 -translate-x-1/2 z-0" />

          {[
            {
              step: '01',
              title: 'Schedule & Bag',
              desc: 'Book a pickup online or via our app. Place your items in any bag (we will return them in our reusable LavaEco totes). No need to sort or count.',
              icon: <Clock className="w-8 h-8 text-emerald-600" />
            },
            {
              step: '02',
              title: 'We Pick It Up',
              desc: 'Our driver arrives during your chosen window. You can hand it to them directly or leave it at your door/concierge.',
              icon: <Truck className="w-8 h-8 text-emerald-600" />
            },
            {
              step: '03',
              title: 'Eco-Cleaning Process',
              desc: 'Our experts inspect every item, treat stains, and clean using 100% plant-based, non-toxic detergents and energy-efficient machines.',
              icon: <Droplets className="w-8 h-8 text-emerald-600" />
            },
            {
              step: '04',
              title: 'Fresh Delivery',
              desc: 'Within 24-48 hours, your clothes are returned crisply folded or hung on recycled hangers, ready to wear.',
              icon: <Sparkles className="w-8 h-8 text-emerald-600" />
            }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`w-full md:w-1/2 flex ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
                  <div className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2">Step {item.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              
              <div className="hidden md:flex w-16 h-16 bg-emerald-100 rounded-full items-center justify-center border-4 border-white shadow-md shrink-0 z-10">
                {item.icon}
              </div>
              
              <div className="w-full md:w-1/2 hidden md:block" />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to get started?</h2>
          <Link to="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-emerald-600/20">
              Book Your First Pickup
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

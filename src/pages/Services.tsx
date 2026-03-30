import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shirt, Wind, Droplets, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'wash-fold',
    title: 'Wash & Fold',
    icon: <Shirt className="w-10 h-10 text-emerald-600" />,
    description: 'Everyday laundry sorted, washed with plant-based detergent, dried, and crisply folded.',
    benefits: ['Sorted by color and fabric', 'Washed with eco-friendly detergent', 'Neatly folded and packaged', 'Returned in reusable bags'],
    who: 'Busy professionals, large families, anyone tired of laundry day.',
    price: 'From $1.50/lb',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'dry-cleaning',
    title: 'Eco Dry Cleaning',
    icon: <Wind className="w-10 h-10 text-emerald-600" />,
    description: 'Non-toxic, solvent-free dry cleaning that is tough on stains but gentle on skin and fabric.',
    benefits: ['100% PERC-free solvents', 'Gentle on delicate fabrics', 'No chemical odors', 'Extends garment lifespan'],
    who: 'Professionals with suits, dresses, and delicate garments requiring special care.',
    price: 'From $6.00/item',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'ironing',
    title: 'Ironing & Pressing',
    icon: <Droplets className="w-10 h-10 text-emerald-600" />,
    description: 'Professional hand-pressing for shirts, suits, and dresses to keep you looking sharp.',
    benefits: ['Crisp, wrinkle-free finish', 'Hand-pressed by experts', 'Hung on recycled hangers', 'Ready to wear immediately'],
    who: 'Anyone needing crisp shirts for work, events, or special occasions.',
    price: 'From $3.50/item',
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'specialty',
    title: 'Specialty Items',
    icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
    description: 'Expert care for bulky items like comforters, rugs, leather, and wedding dresses.',
    benefits: ['Deep cleaning for large items', 'Stain removal expertise', 'Preservation services', 'Odor elimination'],
    who: 'Homeowners needing seasonal cleaning, brides, or those with tough stains.',
    price: 'Custom Pricing',
    image: 'https://images.unsplash.com/photo-1512434018115-373305419084?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Clean laundry" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border-emerald-500/30 px-4 py-1.5 text-sm font-medium rounded-full mb-6">
            Premium Care
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Expert care for <br/>every fabric.
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            From everyday wear to delicate silks, we use specialized eco-friendly processes to ensure your clothes look better and last longer.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-xl text-emerald-600 font-semibold">{service.price}</p>
                <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4 uppercase tracking-wider text-sm">Key Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-slate-900 mb-2 uppercase tracking-wider text-sm">Perfect For</h4>
                  <p className="text-slate-600 italic">{service.who}</p>
                </div>
                
                <div className="pt-8">
                  <Link to="/contact">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-lg shadow-emerald-600/20">
                      Book {service.title}
                    </Button>
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-900 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Not sure what service you need?</h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
          Our experts will inspect your items upon pickup and recommend the best cleaning method for each fabric type.
        </p>
        <Link to="/contact">
          <Button size="lg" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-800 hover:text-white rounded-full px-8">
            Contact Our Experts
          </Button>
        </Link>
      </section>
    </div>
  );
}

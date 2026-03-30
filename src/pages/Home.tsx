import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Truck, 
  Clock, 
  ShieldCheck, 
  Star, 
  Shirt, 
  Droplets, 
  Wind, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-emerald-50/50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Clean laundry" 
            className="w-full h-full object-cover opacity-[0.03]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="mb-6">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none px-4 py-1.5 text-sm font-medium rounded-full">
                  <Leaf className="w-4 h-4 mr-2 inline" /> 100% Eco-Friendly Detergents
                </Badge>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Fresh laundry, <br/>
                <span className="text-emerald-600">zero footprint.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Premium laundry and dry cleaning delivered to your door. We use plant-based detergents that are tough on stains but gentle on your clothes and the planet.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg font-medium shadow-lg shadow-emerald-600/20">
                    Book Pickup Now
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg font-medium border-slate-200 hover:bg-slate-50 text-slate-700">
                    See How It Works
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center space-x-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
                  <span className="text-slate-900 font-bold mr-1">4.9/5</span>
                  from 2,000+ happy locals
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Eco-friendly laundry delivery" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating Trust Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-full">
                        <Truck className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Next-Day Delivery</p>
                        <p className="text-xs text-slate-500 font-medium">Free on orders over $30</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 rounded-full">
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-slate-100 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center space-y-2 px-4">
              <Leaf className="w-6 h-6 text-emerald-500 mb-2" />
              <h3 className="font-semibold text-slate-900">100% Plant-Based</h3>
              <p className="text-xs text-slate-500">Non-toxic detergents</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 px-4">
              <Truck className="w-6 h-6 text-emerald-500 mb-2" />
              <h3 className="font-semibold text-slate-900">Free Pickup</h3>
              <p className="text-xs text-slate-500">Right from your door</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 px-4">
              <Clock className="w-6 h-6 text-emerald-500 mb-2" />
              <h3 className="font-semibold text-slate-900">24h Turnaround</h3>
              <p className="text-xs text-slate-500">Fast & reliable service</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 px-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500 mb-2" />
              <h3 className="font-semibold text-slate-900">Quality Guarantee</h3>
              <p className="text-xs text-slate-500">Or we re-wash for free</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Effortless Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Laundry done in 3 simple steps</h3>
            <p className="text-lg text-slate-600">We've designed our service to be completely frictionless. You tap a button, we do the rest.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-emerald-100 z-0" />
            
            {[
              {
                step: '01',
                title: 'Schedule a Pickup',
                desc: 'Choose a convenient time slot online or via our app. Leave your bags at the door.',
                icon: <Clock className="w-6 h-6 text-emerald-600" />
              },
              {
                step: '02',
                title: 'We Clean with Care',
                desc: 'Our experts inspect, sort, and clean your items using eco-friendly, gentle detergents.',
                icon: <Droplets className="w-6 h-6 text-emerald-600" />
              },
              {
                step: '03',
                title: 'Fresh Delivery',
                desc: 'Your clothes are returned crisp, clean, and neatly folded within 24-48 hours.',
                icon: <Truck className="w-6 h-6 text-emerald-600" />
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 border-4 border-slate-50 group-hover:border-emerald-100 transition-colors">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  STEP {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8">
                Schedule Your First Pickup
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Expert care for every fabric</h3>
              <p className="text-lg text-slate-600">From everyday wear to delicate silks, we use specialized eco-friendly processes for optimal results.</p>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View all services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wash & Fold',
                price: 'From $1.50/lb',
                desc: 'Everyday laundry sorted, washed with plant-based detergent, dried, and crisply folded.',
                icon: <Shirt className="w-8 h-8 text-emerald-500" />
              },
              {
                title: 'Eco Dry Cleaning',
                price: 'From $6.00/item',
                desc: 'Non-toxic, solvent-free dry cleaning that is tough on stains but gentle on skin and fabric.',
                icon: <Wind className="w-8 h-8 text-emerald-500" />
              },
              {
                title: 'Ironing & Pressing',
                price: 'From $3.50/item',
                desc: 'Professional hand-pressing for shirts, suits, and dresses to keep you looking sharp.',
                icon: <Droplets className="w-8 h-8 text-emerald-500" />
              }
            ].map((service, i) => (
              <Card key={i} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-emerald-600 font-medium text-sm mb-4">{service.price}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/pricing" className="text-slate-900 font-semibold text-sm flex items-center hover:text-emerald-600 transition-colors">
                    View Pricing <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View all services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="py-24 bg-emerald-900 text-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Nature leaves" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Mission</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Clean clothes shouldn't dirty the planet.</h3>
              <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                Traditional dry cleaning uses PERC, a toxic chemical linked to health and environmental issues. We do things differently.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  '100% biodegradable, plant-based detergents',
                  'Zero-emission electric delivery fleet',
                  'Reusable laundry bags to eliminate plastic waste',
                  'Water recycling systems saving 40% more water'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />
                    <span className="text-emerald-50 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/sustainability">
                <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-800 hover:text-white rounded-full px-8">
                  Read Our Impact Report
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-3xl border border-emerald-700/50">
                  <h4 className="text-4xl font-bold text-white mb-2">40%</h4>
                  <p className="text-sm text-emerald-200 font-medium">Less water used per load compared to home washing</p>
                </div>
                <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-3xl border border-emerald-700/50">
                  <h4 className="text-4xl font-bold text-white mb-2">0</h4>
                  <p className="text-sm text-emerald-200 font-medium">Toxic chemicals or harsh solvents used</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-3xl border border-emerald-700/50">
                  <h4 className="text-4xl font-bold text-white mb-2">10k+</h4>
                  <p className="text-sm text-emerald-200 font-medium">Plastic bags saved with our reusable totes</p>
                </div>
                <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-3xl border border-emerald-700/50">
                  <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                  <p className="text-sm text-emerald-200 font-medium">Electric delivery vehicles in our fleet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Loved by busy professionals & families</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'Working Mother of 3',
                text: "LavaEco has completely changed my weekends. No more spending Sunday doing 5 loads of laundry. The clothes come back smelling incredibly fresh, not chemical-y.",
                rating: 5
              },
              {
                name: 'David Chen',
                role: 'Consultant',
                text: "I travel constantly for work. Their dry cleaning service is impeccable. My suits look brand new, and I love that they don't use toxic PERC. The pickup app is seamless.",
                rating: 5
              },
              {
                name: 'Elena Rodriguez',
                role: 'Airbnb Host',
                text: "Managing linens for 3 properties was a nightmare until I found LavaEco. Their commercial service is reliable, affordable, and my guests always compliment the soft sheets.",
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="border-none shadow-md bg-white">
                <CardContent className="p-8">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-8 text-lg italic">"{review.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-sm text-slate-500">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-emerald-50 rounded-full blur-3xl opacity-50 z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none px-4 py-1.5 text-sm font-medium rounded-full mb-6">
            Get 20% off your first order
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready to reclaim your free time?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of locals who have outsourced their laundry to LavaEco. Schedule your first pickup in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 h-14 text-lg font-medium shadow-xl shadow-emerald-600/20">
                Book Your Pickup
              </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-4 sm:hidden">No credit card required to schedule.</p>
          </div>
          <p className="text-sm text-slate-500 mt-6 hidden sm:block">No credit card required to schedule. Cancel anytime.</p>
        </div>
      </section>
    </div>
  );
}

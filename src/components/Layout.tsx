import { Link, Outlet, useLocation } from 'react-router-dom';
import { Leaf, Menu, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'FAQ', path: '/faq' },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Top Bar - Trust & Contact */}
      <div className="bg-emerald-900 text-emerald-50 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 1-800-LAVA-ECO</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> hello@lavaeco.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">100% Eco-Friendly Detergents</span>
            <span className="text-emerald-300">•</span>
            <span className="font-medium">Free Pickup & Delivery</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-100 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-emerald-950">Lava<span className="text-emerald-600">Eco</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="ghost" className="font-medium">Log In</Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full px-6">
                Book Pickup
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <nav className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-lg font-medium ${
                        location.pathname === link.path ? 'text-emerald-600' : 'text-slate-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
                    <Link to="/contact">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                        Book Pickup
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full rounded-full">
                        Log In
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <span className="text-2xl font-bold tracking-tight text-white">Lava<span className="text-emerald-400">Eco</span></span>
              </Link>
              <p className="text-emerald-200 text-sm leading-relaxed mb-6">
                Premium, eco-friendly laundry and dry cleaning delivered to your door. We care for your clothes and the planet.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-emerald-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-emerald-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-4 text-sm text-emerald-200">
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Wash & Fold</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Eco Dry Cleaning</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Ironing & Pressing</Link></li>
                <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Commercial Laundry</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-emerald-200">
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link to="/how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</Link></li>
                <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
                <li><Link to="/sustainability" className="hover:text-emerald-400 transition-colors">Sustainability</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
              <ul className="space-y-4 text-sm text-emerald-200">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-400 shrink-0" />
                  <span>123 Green Street, Eco District, City, 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-400 shrink-0" />
                  <span>1-800-LAVA-ECO</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-400 shrink-0" />
                  <span>hello@lavaeco.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-400/60">
            <p>&copy; {new Date().getFullYear()} LavaEco. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

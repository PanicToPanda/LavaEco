import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-emerald-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book Your Pickup
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Schedule a pickup in under 60 seconds. We'll handle the rest.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Booking Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Pickup Scheduled!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We've received your request. You'll receive a confirmation email shortly with your pickup window details.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline" 
                  className="rounded-full px-8"
                >
                  Book Another Pickup
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">1. Your Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Jane" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jane@example.com" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">2. Pickup Location</h3>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Eco Way, Apt 4B" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Seattle" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input id="zip" placeholder="98101" required className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">3. Service Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Primary Service Needed</Label>
                    <select id="serviceType" className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="wash-fold">Wash & Fold</option>
                      <option value="dry-cleaning">Eco Dry Cleaning</option>
                      <option value="both">Both</option>
                      <option value="specialty">Specialty Items</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Instructions (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="e.g., Please don't ring the doorbell, baby is sleeping. Gate code is 1234." 
                      className="min-h-[100px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white resize-none" 
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-14 text-lg font-bold shadow-lg shadow-emerald-600/20 mt-8">
                  Confirm Pickup
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  By booking, you agree to our Terms of Service and Privacy Policy. No credit card required until delivery.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">We're here to help</h2>
              <p className="text-lg text-slate-600 mb-8">
                Have questions about our eco-friendly process or need to adjust an existing order? Reach out to our local team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call or Text</h4>
                    <p className="text-slate-600 font-medium">1-800-LAVA-ECO</p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri, 8am - 6pm</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600 font-medium">hello@lavaeco.com</p>
                    <p className="text-sm text-slate-500 mt-1">We reply within 2 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white sm:col-span-2">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Facility Location</h4>
                    <p className="text-slate-600 font-medium">123 Green Street, Eco District, City, 10001</p>
                    <p className="text-sm text-slate-500 mt-1">Drop-offs welcome during business hours.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Placeholder Map */}
            <div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner border border-slate-300">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col">
                <MapPin className="w-10 h-10 mb-2 opacity-50" />
                <span className="font-medium">Interactive Map Integration</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

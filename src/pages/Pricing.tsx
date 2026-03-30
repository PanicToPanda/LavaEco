import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const pricingPlans = [
  {
    name: 'Wash & Fold',
    price: '$1.50',
    unit: 'per lb',
    description: 'Perfect for everyday laundry like t-shirts, jeans, and socks.',
    features: [
      'Sorted by color & fabric',
      'Washed with eco-detergents',
      'Tumble dried on low',
      'Crisply folded',
      'Returned in reusable bags'
    ],
    popular: false,
    cta: 'Book Wash & Fold'
  },
  {
    name: 'Eco Dry Cleaning',
    price: '$6.00',
    unit: 'starting per item',
    description: 'Non-toxic cleaning for suits, dresses, and delicate fabrics.',
    features: [
      '100% PERC-free solvents',
      'Stain inspection & treatment',
      'Hand-pressed finish',
      'Hung on recycled hangers',
      'Minor repairs included'
    ],
    popular: true,
    cta: 'Book Dry Cleaning'
  },
  {
    name: 'LavaEco Subscription',
    price: '$49',
    unit: 'per month',
    description: 'For busy professionals and families who want laundry on autopilot.',
    features: [
      'Up to 40 lbs Wash & Fold',
      '20% off Dry Cleaning',
      'Weekly scheduled pickups',
      'Priority 24h turnaround',
      'Dedicated support line'
    ],
    popular: false,
    cta: 'Start Subscription'
  }
];

const itemizedPricing = [
  { category: 'Shirts & Blouses', items: [{ name: 'Laundered Shirt', price: '$3.50' }, { name: 'Dry Cleaned Blouse', price: '$6.50' }, { name: 'Silk/Delicate Top', price: '$8.00' }] },
  { category: 'Pants & Skirts', items: [{ name: 'Pants/Slacks', price: '$7.00' }, { name: 'Jeans', price: '$6.50' }, { name: 'Skirt (Standard)', price: '$7.00' }, { name: 'Pleated Skirt', price: '$9.50' }] },
  { category: 'Suits & Dresses', items: [{ name: '2-Piece Suit', price: '$16.00' }, { name: 'Dress (Standard)', price: '$12.00' }, { name: 'Evening Gown', price: 'From $25.00' }] },
  { category: 'Home & Bedding', items: [{ name: 'Comforter (Any Size)', price: '$35.00' }, { name: 'Blanket', price: '$20.00' }, { name: 'Pillow Cases (Set of 2)', price: '$5.00' }] },
];

export default function Pricing() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-emerald-50 py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Badge className="bg-emerald-200 text-emerald-800 hover:bg-emerald-300 border-none px-4 py-1.5 text-sm font-medium rounded-full mb-6">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Simple pricing, <br/>no hidden fees.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Premium eco-friendly care at competitive rates. Free pickup and delivery on all orders over $30.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <Card key={i} className={`relative flex flex-col ${plan.popular ? 'border-emerald-500 shadow-xl shadow-emerald-500/10 scale-105 z-10' : 'border-slate-200 shadow-sm'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-500 min-h-[40px]">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium ml-2">{plan.unit}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8 pb-10">
                  <Link to="/contact" className="w-full">
                    <Button size="lg" className={`w-full rounded-full h-14 text-lg font-medium ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Itemized Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Itemized Dry Cleaning Prices</h2>
            <p className="text-slate-600">A detailed breakdown of our most common items.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {itemizedPricing.map((category, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex justify-between items-center">
                      <span className="text-slate-700">{item.name}</span>
                      <span className="font-semibold text-slate-900">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-slate-500 italic">
            * Prices may vary based on fabric type, embellishments, or heavy staining. Final price confirmed upon inspection.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">Is there a minimum order amount?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Yes, our minimum order is $30. If your order is under $30, you will still be charged the minimum amount. This helps us cover the costs of our eco-friendly delivery fleet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">How do you weigh Wash & Fold laundry?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                We weigh your laundry at our facility using industrial, calibrated scales before washing. You will receive an itemized receipt with the exact weight and cost before we begin processing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">Are there delivery fees?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Pickup and delivery are completely free for all orders meeting our $30 minimum. There are no hidden service fees or fuel surcharges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">Do you charge extra for heavy stains?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed">
                Standard stain treatment is included in our dry cleaning prices. For severe stains requiring specialized restoration or multiple treatments, we will contact you with a quote before proceeding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-900 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to schedule?</h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers who have switched to eco-friendly laundry care.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 rounded-full px-10 h-14 text-lg font-bold">
            Book Your First Pickup
          </Button>
        </Link>
      </section>
    </div>
  );
}

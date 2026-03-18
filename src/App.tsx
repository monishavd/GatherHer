/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Heart, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Coffee
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import logo from './logo.png';
import heroLogo from './hero-logo.png';
import heroImage from './hero-image.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormData = {
  email: string;
  name: string;
};

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf7f2] text-[#1a1a1a] font-serif selection:bg-[#a68158] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcf7f2]/80 backdrop-blur-md border-b border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="GatherHer Logo" 
              className="w-14 h-14 object-contain"
            />
            <span className="text-2xl font-bold tracking-tight text-[#a68158]">GatherHer</span>
          </div>
          <a 
            href="#signup" 
            className="hidden sm:block px-6 py-2 rounded-full border border-[#452f1b] text-[#452f1b] hover:bg-[#452f1b] hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Join the Waitlist
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section - Dan Kennedy Style: Problem & Solution */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={heroLogo} 
                alt="GatherHer Hero Logo" 
                className="w-72 h-72 object-contain mx-auto mb-8"
              />
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#a68158]/10 text-[#a68158] text-sm font-medium mb-6">
                Coming Soon to Your City
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-[#1a1a1a]">
                Why is it so <span className="italic text-[#a68158]">hard</span> to make real friends as an adult?
              </h1>
              <p className="text-xl md:text-2xl text-[#1a1a1a]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                You moved to a new city. You're busy with work. Your old friends drifted away. 
                Social media feels lonely. You're surrounded by people, but where are <span className="italic underline decoration-[#a68158]/30 underline-offset-4">your</span> people?
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#signup"
                  className="w-full sm:w-auto px-8 py-4 bg-[#452f1b] text-white rounded-full text-lg font-medium hover:bg-[#352414] transition-all duration-300 shadow-lg shadow-[#452f1b]/20 flex items-center justify-center gap-2 group"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-[#1a1a1a]/50 italic">
                  Join 1,200+ women already on the waitlist.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image/Logo Section */}
        <section className="py-12 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <img 
                src={heroImage} 
                alt="Women hanging out and laughing in a coffee shop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
                <p className="text-white text-2xl md:text-3xl font-medium max-w-lg">
                  "I just wanted someone to grab coffee with without it being weird."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Agitation & Solution - Dan Kennedy Style */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                GatherHer is the safe space you've been searching for.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#fcf7f2] flex items-center justify-center text-[#a68158]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Women-Only & Verified</h3>
                    <p className="text-[#1a1a1a]/70 leading-relaxed">
                      No bots, no creeps, no hidden agendas. Every member is verified to ensure a safe, supportive community for everyone.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#fcf7f2] flex items-center justify-center text-[#a68158]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Platonic Friendship Only</h3>
                    <p className="text-[#1a1a1a]/70 leading-relaxed">
                      Unlike dating apps repurposed for "BFFs", GatherHer is built from the ground up for one thing: meaningful, platonic connection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#fcf7f2] flex items-center justify-center text-[#a68158]">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Shared Interests, Real Meetups</h3>
                    <p className="text-[#1a1a1a]/70 leading-relaxed">
                      From book clubs to hiking groups, find women who actually like what you like. Move from the screen to the real world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/friend1/400/600" alt="Friendship" className="rounded-3xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/friend2/400/400" alt="Friendship" className="rounded-3xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/friend3/400/400" alt="Friendship" className="rounded-3xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/friend4/400/600" alt="Friendship" className="rounded-3xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section - The Offer */}
        <section id="signup" className="py-24 px-6">
          <div className="max-w-3xl mx-auto bg-[#452f1b] rounded-[40px] p-8 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop doing it alone.</h2>
              <p className="text-xl text-white/80 mb-12">
                Making friends as an adult is hard. GatherHer makes it easier. 
                Join the waitlist for exclusive early access and be the first to know when we launch in your city.
              </p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 max-w-md mx-auto"
                  >
                    <div className="relative">
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your Name"
                        className={cn(
                          "w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all",
                          errors.name && "border-red-400"
                        )}
                      />
                      {errors.name && <span className="absolute -bottom-6 left-2 text-xs text-red-300">{errors.name.message}</span>}
                    </div>
                    <div className="relative mt-2">
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="Your Email Address"
                        className={cn(
                          "w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all",
                          errors.email && "border-red-400"
                        )}
                      />
                      {errors.email && <span className="absolute -bottom-6 left-2 text-xs text-red-300">{errors.email.message}</span>}
                    </div>
                    <button
                      disabled={isSubmitting}
                      className="mt-4 w-full px-8 py-4 bg-white text-[#452f1b] rounded-2xl text-lg font-bold hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                    </button>
                    <p className="text-xs text-white/40 mt-2">
                      We respect your privacy. No spam, ever.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 border border-white/20 rounded-3xl p-8"
                  >
                    <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                    <p className="text-white/80">
                      Thank you for joining the GatherHer community. We'll be in touch soon with exciting updates.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-[#1a1a1a]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="GatherHer Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-[#a68158]">GatherHer</span>
          </div>
          <div className="flex gap-8 text-sm text-[#1a1a1a]/50">
            <a href="#" className="hover:text-[#a68158] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#a68158] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#a68158] transition-colors">Contact Us</a>
          </div>
          <p className="text-sm text-[#1a1a1a]/30">
            © 2026 GatherHer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

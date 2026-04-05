import { motion } from 'motion/react';
import { Send, Mail, Linkedin, Globe, Calendar } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-32">
      {/* Hero */}
      <section className="space-y-6 max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s build the version of your brand people remember.
        </motion.h1>
        <motion.p 
          className="text-xl text-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Send a note or book a time—reply within 24–48 hours.
        </motion.p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Form */}
        <motion.div 
          className="bg-brand-card p-12 rounded-[3rem] border border-white/5 space-y-12 relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Inquiry</h2>
            <p className="text-white/50 text-sm">Tell me about your goals and current challenges.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Alex Sterling"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="alex@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="What are you building?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all resize-none"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitted}
              className="w-full py-5 bg-white text-brand-bg rounded-2xl font-bold hover:bg-brand-accent hover:shadow-[0_0_30px_rgba(213,145,254,0.3)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitted ? 'Message Sent' : 'Send Message'} 
              {!isSubmitted && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>

        {/* Info & Calendly Placeholder */}
        <div className="space-y-12">
          <motion.div 
            className="glass p-12 rounded-[3rem] space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Prefer scheduling?</h2>
              <p className="text-white/50 text-sm">Book a 15-minute discovery call to see if we're a fit.</p>
            </div>
            
            <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-brand-accent/50 transition-all">
              <Calendar className="w-12 h-12 text-white/20 group-hover:text-brand-accent transition-colors" />
              <p className="text-sm font-bold text-white/30 group-hover:text-white transition-colors">Calendly Embed Placeholder</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Mail, label: 'Email', value: 'hello@alexsterling.com', href: 'mailto:hello@alexsterling.com' },
              { icon: Linkedin, label: 'LinkedIn', value: 'alex-sterling-brand', href: '#' },
              { icon: Globe, label: 'Location', value: 'Remote / Global', href: '#' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="glass p-8 rounded-3xl space-y-4 hover:border-brand-accent/50 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <item.icon className="w-6 h-6 text-brand-accent" />
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/30">{item.label}</p>
                  <p className="text-sm font-medium group-hover:text-brand-accent transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

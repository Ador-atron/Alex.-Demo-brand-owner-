import { motion } from 'motion/react';
import { Award, Zap, BarChart3, Users, Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const philosophy = [
  { title: 'Positioning is a decision.', desc: 'It’s not just what you say, it’s what you choose not to be. Clarity beats volume every time.' },
  { title: 'Creative is a system.', desc: 'Great design is table stakes. Great systems ensure that design scales and converts consistently.' },
  { title: 'Metrics keep us honest.', desc: 'If it can’t be measured, it’s just a hobby. Every campaign must have a clear KPI linked to growth.' },
];

const expertise = [
  'Brand Strategy', 'Messaging Architecture', 'Creative Direction', 
  'Campaign Management', 'Content Systems', 'Research & Insights'
];

const timeline = [
  { year: '2024 - Present', role: 'Senior Brand Strategist', company: 'Sterling Agency', impact: 'Led 12+ rebrands for B2B SaaS startups.' },
  { year: '2021 - 2023', role: 'Brand Manager', company: 'Global Tech Corp', impact: 'Increased organic engagement by 230%.' },
  { year: '2019 - 2021', role: 'Creative Director', company: 'Studio X', impact: 'Managed $5M+ in creative production budgets.' },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto space-y-32">
      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I’m Alex Sterling. I turn brand ambiguity into clarity.
          </motion.h1>
          <motion.p 
            className="text-xl text-white/60 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            I’m a brand manager and strategist obsessed with the intersection of high-end creative and hard data. I don't just build brands that look good—I build brands that win.
          </motion.p>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-brand-accent/20 blur-[120px] rounded-full" />
          <motion.div 
            className="relative z-10 w-full h-full glass rounded-[4rem] overflow-hidden p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
              alt="Alex Sterling"
              className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Philosophy</h2>
          <p className="text-4xl font-bold">How I think.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item, i) => (
            <motion.div
              key={i}
              className="bg-brand-card p-10 rounded-[3rem] border border-white/5 hover:border-brand-accent/30 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-brand-accent">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-brand-card/30 -mx-6 md:-mx-12 px-6 md:px-12 rounded-[4rem]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Expertise</h2>
              <p className="text-4xl font-bold">Capability Blocks</p>
            </div>
            <p className="text-white/40 max-w-sm">A focused set of skills designed to drive growth and brand equity.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertise.map((skill, i) => (
              <motion.div
                key={i}
                className="glass p-6 rounded-2xl text-center space-y-4 group hover:bg-brand-accent transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mx-auto group-hover:bg-brand-bg transition-colors">
                  <Award className="w-5 h-5 text-brand-accent group-hover:text-white" />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase group-hover:text-brand-bg transition-colors">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Experience</h2>
          <p className="text-4xl font-bold">The Journey</p>
        </div>
        
        <div className="relative space-y-12">
          <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-white/10 -translate-x-1/2 hidden md:block" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className={cn(
                "relative flex flex-col md:flex-row gap-8 md:gap-20",
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-1 md:text-right space-y-2">
                {i % 2 === 0 ? (
                  <>
                    <p className="text-brand-accent font-bold">{item.year}</p>
                    <h3 className="text-2xl font-bold">{item.role}</h3>
                    <p className="text-white/50">{item.company}</p>
                  </>
                ) : (
                   <div className="p-8 glass rounded-3xl border-brand-accent/20">
                    <p className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">Impact</p>
                    <p className="text-white/70">{item.impact}</p>
                  </div>
                )}
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-brand-accent -translate-x-1/2 z-10 hidden md:block" />
              
              <div className="flex-1 space-y-2">
                {i % 2 !== 0 ? (
                  <>
                    <p className="text-brand-accent font-bold">{item.year}</p>
                    <h3 className="text-2xl font-bold">{item.role}</h3>
                    <p className="text-white/50">{item.company}</p>
                  </>
                ) : (
                  <div className="p-8 glass rounded-3xl border-brand-accent/20">
                    <p className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">Impact</p>
                    <p className="text-white/70">{item.impact}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <Link to="/contact" className="group space-y-6 block">
          <p className="text-xl text-white/50">Want the strategy behind the creative?</p>
          <h2 className="text-5xl md:text-7xl font-bold group-hover:text-brand-accent transition-colors">Let’s talk.</h2>
        </Link>
      </section>
    </div>
  );
}

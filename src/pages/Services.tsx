import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'strategy',
    title: 'Brand Strategy',
    solves: 'Unclear positioning, weak differentiation, and fragmented messaging.',
    outcomes: 'Sharper narrative, confident messaging architecture, and internal alignment.',
    process: ['Discovery & Audit', 'Positioning Strategy', 'Messaging Framework', 'Rollout Plan'],
    icon: Target
  },
  {
    id: 'content',
    title: 'Content Direction',
    solves: 'Inconsistent content quality, low retention, and lack of brand voice.',
    outcomes: 'Scalable content pillars, creative guidelines, and high-converting templates.',
    process: ['Content Audit', 'Pillar Definition', 'Creative Templates', 'System Implementation'],
    icon: Zap
  },
  {
    id: 'campaign',
    title: 'Campaign Management',
    solves: 'Launches that fail to convert or lack a cohesive story.',
    outcomes: 'Stronger CTR/CVR, clearer funnel narrative, and measurable ROI.',
    process: ['Concept Development', 'Production Oversight', 'Launch Orchestration', 'Performance Iteration'],
    icon: BarChart3
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto space-y-32">
      {/* Hero */}
      <section className="space-y-6 max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          End-to-end brand leadership—built for outcomes.
        </motion.h1>
        <motion.p 
          className="text-xl text-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Choose a focused engagement or a full-funnel partnership.
        </motion.p>
      </section>

      {/* Service Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            className="bg-brand-card p-12 rounded-[3rem] border border-white/5 hover:border-brand-accent/30 transition-all group space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
              <service.icon className="w-8 h-8 text-brand-accent group-hover:text-brand-bg" />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{service.title}</h3>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-widest uppercase text-brand-accent">Solves</p>
                <p className="text-white/60 text-sm leading-relaxed">{service.solves}</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold tracking-widest uppercase text-brand-accent">Outcomes</p>
                <p className="text-white/60 text-sm leading-relaxed">{service.outcomes}</p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
              <p className="text-xs font-bold tracking-widest uppercase text-white/40">The Process</p>
              <ul className="space-y-3">
                {service.process.map((step, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-brand-card/30 -mx-6 md:-mx-12 px-6 md:px-12 rounded-[4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Engagement</h2>
              <p className="text-4xl font-bold">How we work together.</p>
            </div>
            <p className="text-white/50 leading-relaxed">
              Every brand is at a different stage. I offer flexible models designed to integrate seamlessly with your team and goals.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { title: 'Project-Based', sub: 'Focused sprints for specific outcomes (e.g., Rebrand, Launch).' },
              { title: 'Monthly Brand Partner', sub: 'Ongoing strategic leadership and creative oversight.' },
              { title: 'Launch Sprint (2–4 weeks)', sub: 'High-intensity positioning and messaging reset.' },
            ].map((model, i) => (
              <motion.div
                key={i}
                className="glass p-8 rounded-3xl space-y-2 hover:border-brand-accent/50 transition-colors"
                whileHover={{ x: 10 }}
              >
                <h4 className="text-xl font-bold text-brand-accent">{model.title}</h4>
                <p className="text-sm text-white/50">{model.sub}</p>
              </motion.div>
            ))}
            <p className="text-xs text-white/30 pt-4 italic">Custom engagements only—scoped after a quick call.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <motion.div
          className="space-y-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Tell me what you’re building. I’ll tell you what to change.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-bg rounded-full font-bold hover:bg-brand-accent hover:shadow-[0_0_40px_rgba(213,145,254,0.4)] transition-all group flex items-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/case-studies" className="px-10 py-5 border border-white/20 rounded-full font-bold hover:border-brand-accent hover:text-brand-accent transition-all">
              See Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

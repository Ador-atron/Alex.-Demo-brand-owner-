import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const metrics = [
  { icon: TrendingUp, value: '+230%', label: 'Engagement growth', sub: 'Rebuilt content system + campaign cadence.' },
  { icon: DollarSign, value: '$12M+', label: 'Revenue influenced', sub: 'Positioning refresh + launch narrative.' },
  { icon: Zap, value: '45+', label: 'Brand transformations', sub: 'From strategy → creative → rollout.' },
];

const featuredCases = [
  {
    id: 'lumina-tech',
    client: 'Lumina Tech',
    outcome: 'From legacy hardware to AI-first platform.',
    metrics: ['+140% Pipeline', '4.2x CTR'],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'nexus-health',
    client: 'Nexus Health',
    outcome: 'Redefining patient-first digital care.',
    metrics: ['+80% Retention', '$4M ARR'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-32">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {["I build brands that", "win attention—", "and keep it."].map((line, i) => (
                <motion.span
                  key={i}
                  className="block overflow-hidden"
                >
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/60 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I help founders and teams increase demand, sharpen positioning, and scale campaigns with clear metrics—not vibes.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link to="/case-studies" className="px-8 py-4 bg-white text-brand-bg rounded-full font-bold hover:bg-brand-accent hover:shadow-[0_0_30px_rgba(213,145,254,0.3)] transition-all group flex items-center gap-2">
              View Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white/20 rounded-full font-bold hover:border-brand-accent hover:text-brand-accent transition-all">
              Work With Me
            </Link>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div 
            className="relative z-10 space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {['Positioning', 'Messaging', 'Creative Direction', 'Campaigns'].map((label, i) => (
              <motion.div
                key={label}
                className="glass p-6 rounded-2xl w-64 ml-auto"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [i % 2 === 0 ? 2 : -2, i % 2 === 0 ? -2 : 2, i % 2 === 0 ? 2 : -2]
                }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ marginLeft: `${i * 20}px` }}
              >
                <span className="text-sm font-bold tracking-widest uppercase text-brand-accent">{label}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* Results Section */}
      <section className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Proof, not promises.</h2>
          <p className="text-3xl font-bold">Measurable impact across the board.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="bg-brand-card p-8 rounded-3xl border border-white/5 hover:border-brand-accent/30 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <metric.icon className="w-8 h-8 text-brand-accent mb-6" />
              <div className="space-y-2">
                <motion.span 
                  className="text-5xl font-bold block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                >
                  {metric.value}
                </motion.span>
                <p className="font-bold text-lg">{metric.label}</p>
                <p className="text-white/50 text-sm">{metric.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Cases */}
      <section className="space-y-16">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Selected Work</h2>
            <p className="text-3xl font-bold">Strategic narratives that scale.</p>
          </div>
          <Link to="/case-studies" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
            View all cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-24">
          {featuredCases.map((project, i) => (
            <motion.div
              key={project.id}
              className={cn(
                "flex flex-col lg:flex-row gap-12 items-center",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/40">{project.client}</span>
                  <h3 className="text-4xl font-bold leading-tight">{project.outcome}</h3>
                </div>
                <div className="flex gap-4">
                  {project.metrics.map((m, j) => (
                    <span key={j} className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold">
                      {m}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/case-studies/${project.id}`}
                  className="inline-flex items-center gap-2 text-brand-accent font-bold group"
                >
                  View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="space-y-16 py-20 bg-brand-card/30 -mx-6 md:-mx-12 px-6 md:px-12 rounded-[4rem]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">The Method</h2>
          <p className="text-4xl font-bold">Strategy → Execution → Growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block -translate-y-1/2 z-0" />
          {[
            { step: '01', title: 'Strategy', desc: 'Positioning, audience, narrative, messaging architecture.' },
            { step: '02', title: 'Execution', desc: 'Creative direction, campaign systems, content ops.' },
            { step: '03', title: 'Growth', desc: 'Iteration, measurement, performance insights, scaling.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-3xl relative z-10 space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <span className="text-4xl font-black text-white/5 block">{item.step}</span>
              <h4 className="text-xl font-bold text-brand-accent">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <motion.div
          className="space-y-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            If you want a brand that converts, let’s build it.
          </h2>
          <p className="text-xl text-white/50">Strategy-led, execution-ready, measurable outcomes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-white text-brand-bg rounded-full font-bold hover:bg-brand-accent hover:shadow-[0_0_40px_rgba(213,145,254,0.4)] transition-all group flex items-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:hello@alexsterling.com" className="px-10 py-5 border border-white/20 rounded-full font-bold hover:border-brand-accent hover:text-brand-accent transition-all">
              Email Me
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

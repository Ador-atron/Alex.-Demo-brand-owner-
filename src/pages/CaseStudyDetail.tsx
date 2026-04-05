import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Target, AlertCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projectData: Record<string, any> = {
  'lumina-tech': {
    client: 'Lumina Tech',
    title: 'From Legacy Hardware to AI-First Platform',
    scope: 'Rebrand & Strategy',
    role: 'Brand Lead',
    timeline: '6 Months',
    outcome: 'Repositioned Lumina and rebuilt their campaign system, driving a 140% increase in sales pipeline.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1920',
    stats: [
      { label: 'Goal', value: 'Market Pivot' },
      { label: 'Challenge', value: 'Legacy Perception' },
      { label: 'Strategy', value: 'AI Narrative' },
      { label: 'Results', value: '+140% Pipeline', highlight: true },
    ],
    problem: {
      text: 'Lumina was perceived as a "box-mover" in an era where software and AI are the primary value drivers. Their messaging was technical, dry, and failed to capture the strategic value of their new AI-integrated hardware suite.',
      bullets: [
        '32% decline in organic search visibility',
        'Sales cycle exceeding 14 months',
        'High churn among early-adopter segments',
        'Inconsistent visual identity across regions'
      ]
    },
    decisions: [
      { title: 'The Pivot', why: 'Shifted focus from "Specs" to "Outcomes".', impact: 'Reduced sales friction by 40%.' },
      { title: 'Visual Reset', why: 'Cinematic, high-contrast UI system.', impact: 'Increased brand recall by 2.5x.' },
      { title: 'Content Ops', why: 'Automated campaign cadence.', impact: 'Consistent 4.2x CTR across LinkedIn.' },
    ],
    results: [
      { value: '+140%', label: 'Conversion Rate', sub: 'Measured over 6 months' },
      { value: '4.2x', label: 'Ad Engagement', sub: 'vs Industry average' },
      { value: '$12M', label: 'Pipeline Influenced', sub: 'Direct attribution' },
    ]
  }
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = projectData[id || ''] || projectData['lumina-tech'];

  return (
    <div className="space-y-32">
      {/* Hero */}
      <section className="relative h-[80vh] -mt-32 -mx-6 md:-mx-12 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.client}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Cases
            </Link>
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap gap-8 text-sm font-bold tracking-widest uppercase text-brand-accent">
                <div>Role: {project.role}</div>
                <div>Timeline: {project.timeline}</div>
                <div>Scope: {project.scope}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 glass rounded-[3rem]">
          {project.stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              className="space-y-2 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-white/30">{stat.label}</p>
              <p className={cn("text-xl font-bold", stat.highlight && "text-brand-accent")}>{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">The Challenge</h2>
            <p className="text-4xl font-bold leading-tight">What wasn't working.</p>
          </div>
          <p className="text-xl text-white/60 leading-relaxed">{project.problem.text}</p>
          <ul className="space-y-4">
            {project.problem.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <AlertCircle className="w-5 h-5 text-brand-accent shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-square bg-brand-card rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-accent/5 blur-[80px]" />
          <TrendingUp className="w-32 h-32 text-brand-accent/20 animate-pulse" />
          <div className="relative z-10 text-center space-y-4">
            <p className="text-6xl font-black text-white/10">SIGNAL</p>
            <p className="text-6xl font-black text-white/10">LOST</p>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="max-w-7xl mx-auto space-y-16">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-white/10" />
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">Strategic Decisions</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.decisions.map((decision: any, i: number) => (
            <motion.div
              key={i}
              className="bg-brand-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-accent/30 transition-all group"
              whileHover={{ y: -10 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-colors">
                <Target className="w-6 h-6 text-brand-accent group-hover:text-brand-bg" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{decision.title}</h3>
              <div className="space-y-4 text-sm">
                <p className="text-white/40 uppercase tracking-widest font-bold">Why it mattered</p>
                <p className="text-white/70 leading-relaxed">{decision.why}</p>
                <p className="text-white/40 uppercase tracking-widest font-bold pt-4">Impact</p>
                <p className="text-brand-accent font-bold">{decision.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-32 bg-brand-card/30 -mx-6 md:-mx-12 px-6 md:px-12 rounded-[4rem]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent">The Outcome</h2>
            <p className="text-5xl font-bold">Hard metrics. Real growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {project.results.map((res: any, i: number) => (
              <div key={i} className="text-center space-y-2">
                <motion.p 
                  className="text-6xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  {res.value}
                </motion.p>
                <p className="font-bold text-lg">{res.label}</p>
                <p className="text-white/40 text-sm">{res.sub}</p>
              </div>
            ))}
            <div className="bg-brand-accent/10 p-8 rounded-3xl border border-brand-accent/20 flex flex-col justify-center">
              <p className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">Authority Note</p>
              <p className="text-sm text-white/70 italic">"Next iteration: Scaling content automation to reduce overhead by another 15%."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case */}
      <section className="max-w-7xl mx-auto py-20 border-t border-white/5">
        <Link to="/case-studies/nexus-health" className="group block space-y-8">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/30 text-center">Next Case Study</p>
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold group-hover:text-brand-accent transition-colors">Nexus Health</h2>
            <p className="text-xl text-white/50">Redefining patient-first digital care.</p>
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all">
              <ArrowRight className="w-6 h-6 group-hover:text-brand-bg transition-colors" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Strategy', 'Campaign', 'Content System', 'Rebrand', 'Launch'];

const projects = [
  {
    id: 'lumina-tech',
    client: 'Lumina Tech',
    category: 'Rebrand',
    problem: 'Legacy hardware perception in an AI-driven market.',
    metrics: ['+140% Pipeline', '4.2x CTR'],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200',
    role: 'Brand Lead',
    timeline: '6 Months'
  },
  {
    id: 'nexus-health',
    client: 'Nexus Health',
    category: 'Launch',
    problem: 'Fragmented digital care experience for seniors.',
    metrics: ['+80% Retention', '$4M ARR'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    role: 'Strategy Director',
    timeline: '4 Months'
  },
  {
    id: 'vortex-energy',
    client: 'Vortex Energy',
    category: 'Campaign',
    problem: 'Low awareness for sustainable grid solutions.',
    metrics: ['2.5M Reach', '+200% Leads'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    role: 'Creative Strategist',
    timeline: '3 Months'
  },
  {
    id: 'aura-skincare',
    client: 'Aura Skincare',
    category: 'Content System',
    problem: 'Inconsistent brand voice across 12 social channels.',
    metrics: ['+310% Engagement', '15% CVR'],
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=1200',
    role: 'Content Architect',
    timeline: '5 Months'
  }
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="space-y-6 max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Case studies built on measurable change.
        </motion.h1>
        <motion.p 
          className="text-xl text-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Positioning, campaigns, content systems—tracked to outcomes.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
        <Filter className="w-4 h-4 text-white/30 shrink-0" />
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                activeFilter === cat 
                  ? "bg-brand-accent text-brand-bg shadow-[0_0_20px_rgba(213,145,254,0.3)]" 
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-brand-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-accent/30 transition-all"
          >
            <Link to={`/case-studies/${project.id}`} className="block h-full">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Reveal Info */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-widest uppercase text-brand-accent">Role</p>
                    <p className="text-sm font-medium">{project.role}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-xs font-bold tracking-widest uppercase text-brand-accent">Timeline</p>
                    <p className="text-sm font-medium">{project.timeline}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/40">{project.category}</span>
                    <span className="text-xs font-bold text-brand-accent">{project.client}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{project.problem}</h3>
                </div>

                <div className="flex gap-4">
                  {project.metrics.map((m, j) => (
                    <div key={j} className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-sm font-bold">{m}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                  View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

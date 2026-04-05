import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter group">
          ALEX<span className="text-brand-accent group-hover:animate-pulse">.</span>STERLING
        </Link>
        
        <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors relative py-1",
                location.pathname === link.path ? "text-white" : "text-white/50 hover:text-white"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="px-6 py-2.5 rounded-full bg-white text-brand-bg text-sm font-bold hover:bg-brand-accent hover:shadow-[0_0_20px_rgba(213,145,254,0.4)] transition-all duration-300"
        >
          Start a Project
        </Link>
      </div>
    </nav>
  );
}

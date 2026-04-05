import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="noise-overlay" />
        <div className="vignette fixed inset-0 pointer-events-none z-40" />
        
        {/* Animated Background Gradient */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <CustomCursor />
        <Navbar />
        
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>

        <footer className="px-6 md:px-12 py-12 border-t border-white/5 bg-brand-bg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p className="text-sm text-white/50">Strategy first. Tastefully loud.</p>
              <p className="text-xs text-white/30">© 2026 Alex Sterling. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Behance</a>
              <a href="mailto:hello@alexsterling.com" className="hover:text-brand-accent transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

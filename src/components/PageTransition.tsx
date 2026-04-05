import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="min-h-screen pt-32 pb-20 px-6 md:px-12"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

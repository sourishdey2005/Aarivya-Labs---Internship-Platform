import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-24 h-24 rounded-full border-t-2 border-blue-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dbjjili1c/image/upload/v1774683108/2545d3c3-7656-417b-a950-44a725964121_zplmfo.jpg" 
            alt="Logo" 
            className="w-12 h-12 object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-widest">AARIVYA LABS</h2>
        <div className="flex items-center justify-center gap-2 text-blue-600">
          <Loader2 className="animate-spin" size={16} />
          <span className="text-sm font-medium uppercase tracking-widest">Initializing Innovation...</span>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 text-[10px] uppercase tracking-[0.2em]">
        Batch 2026 • Powered by H&P Projects
      </div>
    </motion.div>
  );
}

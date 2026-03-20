import { motion } from "framer-motion";
import forestBg from "@/assets/forest-bg.jpg";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={forestBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-mist" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider text-foreground text-glow mb-4">
            Animal Persona Index
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl font-serif-cn text-foreground/80 mb-8"
        >
          你在动物世界中，会成为什么？
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground font-serif-cn leading-relaxed mb-12 space-y-1"
        >
          <p>不是你像什么动物，</p>
          <p>而是你在不同情境下的选择。</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(150 60% 50% / 0.3)" }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="px-12 py-4 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-lg font-serif-cn text-foreground hover:bg-primary/30 transition-colors duration-300"
        >
          开始测试
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-muted-foreground/50 text-sm animate-pulse-slow"
        >
          ↓ 20 个情境问题 · 约 5 分钟
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;

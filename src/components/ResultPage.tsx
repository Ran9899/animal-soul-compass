import { motion } from "framer-motion";
import type { AnimalResult, Category } from "@/data/results";
import { categoryGroups } from "@/data/results";

interface ResultPageProps {
  main: AnimalResult;
  secondary: AnimalResult;
  mainCategory: Category;
  secondaryCategory: Category;
  onViewDetail: () => void;
}

const ResultPage = ({ main, secondary, onViewDetail }: ResultPageProps) => {
  // Get two other animals from secondary category for "你也可能是"
  const secondaryGroup = Object.values(categoryGroups).flatMap(g => g.animals).filter(a => a.name !== main.name && a.name !== secondary.name);
  const altAnimals = [secondary, secondaryGroup[0]].filter(Boolean);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-mist" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Large emoji */}
        <motion.div
          className="text-8xl md:text-[10rem] mb-6 animate-float"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {main.emoji}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-serif-cn text-3xl md:text-4xl font-bold text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {main.name}
        </motion.h1>

        {/* English subtitle */}
        <motion.p
          className="font-display text-lg text-primary tracking-widest mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {main.englishName}
        </motion.p>

        {/* Main statement */}
        <motion.p
          className="font-serif-cn text-xl md:text-2xl text-foreground/90 leading-relaxed whitespace-pre-line mb-8 text-glow-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {main.statement}
        </motion.p>

        {/* Rarity */}
        <motion.div
          className="text-muted-foreground text-sm font-serif-cn mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          稀有度：{main.rarity}
        </motion.div>

        {/* Secondary */}
        <motion.div
          className="text-muted-foreground font-serif-cn text-sm mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="mb-2">你也可能是：</p>
          <p className="text-lg">
            {altAnimals.map((a, i) => (
              <span key={i}>
                {i > 0 && " / "}
                {a.emoji} {a.name.replace("型人格", "")}
              </span>
            ))}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onViewDetail}
          className="px-10 py-4 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-base font-serif-cn text-foreground hover:bg-primary/30 transition-colors duration-300"
        >
          查看完整人格解析
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultPage;

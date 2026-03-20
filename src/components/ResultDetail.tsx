import { motion } from "framer-motion";
import type { AnimalResult } from "@/data/results";

interface ResultDetailProps {
  main: AnimalResult;
  secondary: AnimalResult;
  onShare: () => void;
  onRestart: () => void;
}

const sections = [
  { key: "outer", label: "外在人格", icon: "🌿" },
  { key: "social", label: "社交方式", icon: "🌊" },
  { key: "inner", label: "内在需求", icon: "🔥" },
  { key: "values", label: "深层价值观", icon: "💎" },
  { key: "blindspot", label: "你的盲区", icon: "⚠️" },
] as const;

const ResultDetail = ({ main, secondary, onShare, onRestart }: ResultDetailProps) => {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-6xl mb-4 block">{main.emoji}</span>
          <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-foreground mb-2">
            你的动物人格解析
          </h1>
          <p className="font-display text-sm text-primary tracking-widest">
            {main.englishName}
          </p>
        </motion.div>

        {/* Detail sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className={`p-6 rounded-xl border transition-all ${
                section.key === "blindspot"
                  ? "border-accent/30 bg-accent/5"
                  : "border-border bg-card/50 card-glow"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{section.icon}</span>
                <h3 className="font-serif-cn text-base font-bold text-foreground">
                  【{section.label}】
                </h3>
              </div>
              <p className="font-serif-cn text-sm text-foreground/80 leading-relaxed">
                {main[section.key]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={onShare}
            className="w-full max-w-xs px-8 py-4 bg-primary/20 border border-primary/40 rounded-full text-base font-serif-cn text-foreground hover:bg-primary/30 transition-colors"
          >
            生成分享卡片
          </button>
          <button
            onClick={onRestart}
            className="text-muted-foreground hover:text-foreground text-sm font-serif-cn transition-colors"
          >
            重新测试
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultDetail;

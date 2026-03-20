import { motion } from "framer-motion";
import type { AnimalResult } from "@/data/results";

interface ShareCardProps {
  main: AnimalResult;
  secondary: AnimalResult;
  onClose: () => void;
}

const ShareCard = ({ main, secondary, onClose }: ShareCardProps) => {
  const handleCopy = async () => {
    const text = `${main.emoji} ${main.name}\n"${main.quote}"\n副人格：${secondary.emoji} ${secondary.name.replace("型人格", "")}\n\nAnimal Persona Index`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // fallback
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        {/* The card */}
        <div className="relative bg-gradient-to-b from-card via-card to-secondary/20 border border-border rounded-2xl p-8 text-center card-glow overflow-hidden">
          {/* Decorative mist */}
          <div className="absolute inset-0 bg-mist opacity-50" />

          <div className="relative z-10">
            <span className="text-7xl block mb-4 animate-float">{main.emoji}</span>

            <h2 className="font-serif-cn text-2xl font-bold text-foreground mb-4">
              {main.name}
            </h2>

            <p className="font-serif-cn text-foreground/70 text-sm italic leading-relaxed mb-6">
              "{main.quote}"
            </p>

            <div className="text-muted-foreground text-xs font-serif-cn mb-6">
              副人格：{secondary.emoji} {secondary.name.replace("型人格", "")}
            </div>

            <div className="border-t border-border pt-4">
              <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">
                ANIMAL PERSONA INDEX
              </p>
            </div>
          </div>
        </div>

        {/* Actions below card */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={handleCopy}
            className="w-full px-8 py-3 bg-primary/20 border border-primary/40 rounded-full text-sm font-serif-cn text-foreground hover:bg-primary/30 transition-colors"
          >
            复制文字内容
          </button>

          <p className="text-muted-foreground/60 text-xs font-serif-cn">
            💡 长按截图保存分享卡片
          </p>

          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-sm font-serif-cn transition-colors mt-2"
          >
            返回
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShareCard;

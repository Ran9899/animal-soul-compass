import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/data/questions";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionFlowProps {
  answers: (number | null)[];
  onAnswer: (questionIdx: number, optionIdx: number) => void;
  onComplete: () => void;
  onBack: () => void;
}

const optionLabels = ["A", "B", "C", "D"];

const QuestionFlow = ({ answers, onAnswer, onComplete, onBack }: QuestionFlowProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [direction, setDirection] = useState(1);

  const question = questions[currentQ];
  const selected = answers[currentQ];
  const isLast = currentQ === questions.length - 1;
  const isFirst = currentQ === 0;

  const goNext = () => {
    if (selected === null || selected === undefined) return;
    if (isLast) {
      onComplete();
      return;
    }
    setDirection(1);
    setCurrentQ((prev) => prev + 1);
  };

  const goPrev = () => {
    if (isFirst) {
      onBack();
      return;
    }
    setDirection(-1);
    setCurrentQ((prev) => prev - 1);
  };

  const goTo = (idx: number) => {
    setDirection(idx > currentQ ? 1 : -1);
    setCurrentQ(idx);
  };

  const handleShare = async () => {
    try {
      await navigator.share?.({ title: "Animal Persona Index", text: "你在动物世界中，会成为什么？", url: window.location.href });
    } catch {
      // fallback: do nothing
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <span className="text-muted-foreground font-serif-cn text-sm">
          Q {currentQ + 1} / {questions.length}
        </span>
        <button onClick={handleShare} className="text-muted-foreground hover:text-foreground transition-colors">
          <Share2 size={18} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 md:px-8">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQ}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-lg"
          >
            {/* Scenario */}
            <p className="text-muted-foreground font-serif-cn text-sm md:text-base leading-relaxed mb-4">
              {question.scenario}
            </p>

            {/* Prompt */}
            <h2 className="text-foreground font-serif-cn text-xl md:text-2xl font-bold mb-8">
              {question.prompt}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((opt, idx) => {
                const isSelected = selected === idx;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onAnswer(currentQ, idx)}
                    className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-300 font-serif-cn text-sm md:text-base ${
                      isSelected
                        ? "border-primary/60 bg-primary/10 card-glow-selected text-foreground"
                        : "border-border bg-card/50 hover:border-muted-foreground/30 text-foreground/80"
                    }`}
                  >
                    <span className={`inline-block w-7 font-display text-xs ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                      {optionLabels[idx]}
                    </span>
                    {opt.text}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="px-4 md:px-8 pb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goPrev}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-serif-cn"
          >
            <ChevronLeft size={16} />
            {isFirst ? "返回" : "上一题"}
          </button>

          <button
            onClick={goNext}
            disabled={selected === null || selected === undefined}
            className={`flex items-center gap-1 px-6 py-2 rounded-full text-sm font-serif-cn transition-all duration-300 ${
              selected !== null && selected !== undefined
                ? "bg-primary/20 border border-primary/40 text-foreground hover:bg-primary/30"
                : "bg-secondary text-muted-foreground cursor-not-allowed"
            }`}
          >
            {isLast ? "查看结果" : "下一题"}
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 flex-wrap">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentQ
                  ? "bg-primary w-4"
                  : answers[idx] !== null && answers[idx] !== undefined
                  ? "bg-primary/40"
                  : "bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionFlow;

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "@/components/LandingPage";
import QuestionFlow from "@/components/QuestionFlow";
import ResultPage from "@/components/ResultPage";
import ResultDetail from "@/components/ResultDetail";
import ShareCard from "@/components/ShareCard";
import { questions } from "@/data/questions";
import { getResult, type AnimalResult, type Category } from "@/data/results";

type Stage = "landing" | "questions" | "result" | "detail" | "share";

const Index = () => {
  const [stage, setStage] = useState<Stage>("landing");
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [result, setResult] = useState<{
    main: AnimalResult;
    secondary: AnimalResult;
    mainCategory: Category;
    secondaryCategory: Category;
  } | null>(null);

  const handleAnswer = useCallback((qIdx: number, optIdx: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  }, []);

  const handleComplete = useCallback(() => {
    const validAnswers = answers.filter((a): a is number => a !== null);
    if (validAnswers.length === questions.length) {
      setResult(getResult(validAnswers));
      setStage("result");
    }
  }, [answers]);

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null));
    setResult(null);
    setStage("landing");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {stage === "landing" && (
          <LandingPage onStart={() => setStage("questions")} />
        )}
        {stage === "questions" && (
          <QuestionFlow
            answers={answers}
            onAnswer={handleAnswer}
            onComplete={handleComplete}
            onBack={() => setStage("landing")}
          />
        )}
        {stage === "result" && result && (
          <ResultPage
            {...result}
            onViewDetail={() => setStage("detail")}
          />
        )}
        {stage === "detail" && result && (
          <ResultDetail
            main={result.main}
            secondary={result.secondary}
            onShare={() => setStage("share")}
            onRestart={handleRestart}
          />
        )}
        {stage === "share" && result && (
          <ShareCard
            main={result.main}
            secondary={result.secondary}
            onClose={() => setStage("detail")}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;

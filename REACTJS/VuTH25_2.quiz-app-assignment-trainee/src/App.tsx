import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import questions from "./data/questions.json";
import { esbuildVersion } from "vite";
import ReviewScreen from "./components/ReviewScreen";
import EndScreen from "./components/EndScreen";

type Screen = "start" | "game" | "end" | "review";

function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScreen("game");
    setScore(0);
    setCurrentQuestion(0);
    setAnswers({});
    setScreen("game");
  };

  const goPrev = () =>
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));

  const goNext = () => {
    setCurrentQuestion((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const submit = () => {
    let s = 0;
    for (const q of questions) {
      const sel = answers[Number(q.id)];
      if (
        sel !== undefined &&
        q.answers[sel] &&
        q.answers[sel].correct === true
      ) {
        s++;
      }
    }
    setScore(s);
    setScreen("end");
  };

  const restart = () => {
    setScreen("start");
    setScore(0);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const selectAnswer = (questionId: number, choiceIdx: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choiceIdx }));
  };

  const goReview = () => setScreen("review");
  return (
    <>
      {screen === "start" && <StartScreen onStart={handleStart} />}
      {screen === "game" && (
        <GameScreen
          questions={questions}
          currentIndex={currentQuestion}
          answers={answers}
          onSelect={selectAnswer}
          onNext={goNext}
          onPrev={goPrev}
          onSubmit={submit}
        />
      )}
      {screen === "end" && <EndScreen   score={score}
          total={questions.length}
          onTryAgain={tryAgain}
          onReview={goReview}/>}
      {screen === "review" && <ReviewScreen questions={questions}
          answers={answers}
          onRestart={restartFromReview}/>}
    </>
  );
}

export default App;

interface GameScreenProps {
  questions: any[];
  currentIndex: number;
  answers: Record<number, number>;
  onSelect: (questionId: number, choiceIdx: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const GameScreen = ({
  questions,
  currentIndex,
  answers,
  onSelect,
  onNext,
  onPrev,
  onSubmit,
}: GameScreenProps) => {
  const q = questions[currentIndex];
  const total = questions.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;
  return (
    <div className="card game-screen">
      <div className="meta">
        <div className="qcount">
          Question {currentIndex + 1} / {total}
        </div>
      </div>

      <div className="question-block">
        <h2 className="question">{q.question_content}</h2>

        <ul className="choices">
          {q.answers.map((ans: { answer_content: string; correct: boolean }, idx: number) => {
            const selected = answers[q.id] === idx;
            return (
              <li
                key={idx}
                className={`choice ${selected ? "selected" : ""}`}
                onClick={() => onSelect(q.id, idx)}
              >
                <span className="choice-text">{ans.answer_content}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="controls">
        <button className="btn prev" onClick={onPrev} disabled={isFirst}>
          Previous
        </button>

        {!isLast ? (
          <button className="btn main" onClick={onNext}>
            Next
          </button>
        ) : (
          <button className="btn submit" onClick={onSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default GameScreen;

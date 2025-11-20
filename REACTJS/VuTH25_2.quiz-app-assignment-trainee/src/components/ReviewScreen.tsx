import React from "react";

type ReviewScreenProps = {
  questions: Array<{
    id: number;
    question_content: string;
    answers: Array<{
      answer_content: string;
      correct: boolean;
    }>;
  }>;
  answers: Record<number, number>;
  onRestart: () => void;          
}

export default function ReviewScreen({ questions, answers, onRestart }: ReviewScreenProps) {
  return (
    <div className="card review-screen">
      <h1>Review Answers</h1>

      <div className="review-list">
        {questions.map((q, qi) => {
          const userSel = answers[q.id];
          return (
            <div key={q.id} className="review-item">
              <h3 className="q-title">{qi + 1}. {q.question_content}</h3>
              <ul className="choices review-choices">
                {q.answers.map((a, ai) => {
                  const isCorrect = a.correct === true;
                  const isSelected = userSel === ai;
                  const cls = isCorrect
                    ? "choice review-correct"
                    : isSelected
                      ? "choice review-incorrect"
                      : "choice";
                  return (
                    <li key={ai} className={cls}>
                      <span>{a.answer_content}</span>
                      {isCorrect && <strong className="tag"> (Correct)</strong>}
                      {isSelected && !isCorrect && <strong className="tag"> (Your choice)</strong>}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="btn submit" onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
}

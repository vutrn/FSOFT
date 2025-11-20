import React from "react";

interface EndScreenProps {
  score: number;
  total: number;
  onTryAgain: () => void;
  onReview: () => void;
}

export default function EndScreen({
  score,
  total,
  onTryAgain,
  onReview,
}: EndScreenProps) {
  return (
    <div className="card end-screen">
      <h1>Finished</h1>
      <p className="score">
        {score} / {total}
      </p>
      <div className="end-actions">
        <button className="btn main" onClick={onTryAgain}>
          Try again
        </button>
        <button className="btn review" onClick={onReview}>
          Review
        </button>
      </div>
    </div>
  );
}

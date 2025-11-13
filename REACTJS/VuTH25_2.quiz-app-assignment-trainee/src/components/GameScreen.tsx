import questions from "../data/questions.json"

interface GameScreenProps {
  questions: typeof questions;
}


const GameScreen = ({}) => {
  return (
    <div className="mx-auto min-h-screen">
      <div className="flex justify-center gap-5 border py-4">
        <button className="cursor-pointer rounded-lg bg-gray-400 px-10 py-3 font-bold shadow-xl">
          Previous
        </button>
        <button className="cursor-pointer rounded-lg bg-green-300 px-10 py-3 font-bold shadow-xl">
          Next
        </button>
      </div>

      <div>
        <p>10:00</p>
        <p>Question: 1/5</p>
        <p>What is React?</p>
      </div>

      <div>
        {questions.map((item) => (
          <div>
            <input type="radio" id={item.id} name="answer" />
            <label htmlFor={item.id.toString()}>{item.question_content}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;

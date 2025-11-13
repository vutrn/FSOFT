interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-indigo-300">
      <div className="container mx-auto pt-16 text-center">
        <p className="mb-6 text-5xl font-bold text-white">
          Welcome to React Quiz Game!
        </p>
        <button
          onClick={onStart}
          className="cursor-pointer rounded-lg bg-green-300 px-10 py-3 font-bold shadow-xl hover:bg-green-500"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartScreen;

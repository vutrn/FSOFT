import { Link } from "react-router-dom";
import { useCounter } from "../store/use-store";

const Home = () => {
  const counter = useCounter((state) => state.counter);
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  const increByAmount = useCounter((state) => state.increByAmount);
  console.log(counter);

  return (
    <div>
      <p>Home</p>
      <Link to='/login'>Login (by Link)</Link>
      <br />
      <button onClick={decrement}>Decrement</button>
      <p>{counter}</p>
      <button>Increment</button>
      <button onClick={() => increByAmount(5)}>Increase by 5</button>
    </div>
  );
};

export default Home;

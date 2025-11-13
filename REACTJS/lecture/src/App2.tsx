import { useState } from "react";
import Login from "./components/Login";

const App2 = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Login setIsLogin={setIsLogin} />
      {isLogin ? <p className='text-green-500'>Correct</p> : <p className='text-red-500'>Wrong</p>}
    </>
  );
};

export default App2;

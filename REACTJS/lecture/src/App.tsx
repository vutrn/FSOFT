import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export interface TodoItem {
  name: string;
  status: "todo" | "done";
  id: number;
}

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<TodoItem[]>([]);
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);

  // const totalPrice = useMemo(() => {
  //   let sum = products.reduce((acc, curr) => {
  //     return acc + curr.price * curr.quantity;
  //   }, 0);
  // }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // console.log(value)
  };

  const handleSubmit = useCallback(() => {
    setList([...list, { name: inputRef.current!.value, status: "todo", id: Date.now() }]);
    // setValue('')
    inputRef.current!.value = "";
    inputRef.current?.focus();
    // The ! tells TypeScript "I promise this isn't null"
  }, []);

  // case 1
  useEffect(() => {
    // console.log("useEffect 1 without deps");
  });
  // without deps -> run every render (mount + update)

  // case 2
  useEffect(() => {
    // console.log("use effect 2 with deps");
  }, []);
  // with empty deps -> run only once (mount)

  //case 3
  useEffect(() => {
    // console.log("use effect 3 with deps [list]");
  }, [list]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(time + 1);
  //   }, 1000);

  //   // return used to clean up side effects when component unmounts or before re-running the effect
  //   return () => clearInterval(timer);
  // }, [time]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(time + 1);
  //   }, 1000);
  // }, [time]);

  const counterRef = useRef(0);
  counterRef.current++;
  // console.log(counterRef);

  // useRef to keep track of mutable values that do not cause re-renders when updated
  // also used to reference DOM elements directly

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      <div>
        <input ref={inputRef} type='text' onChange={handleInput} />
        <button onClick={handleSubmit}>add</button>
      </div>
      <div>
        {list.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
      <Header toggle={toggle} setToggle={setToggle} />
      <Content />
      <Footer />
    </>
  );
}

export default App;

// jsx - JavaScript XML

// function component vs class component
// class component use state management
// function component use hooks

// setState is async
// callback is closure
// no re-rendering when prev value = new value

// useEffect -> side effect (fetch API, timer, DOM event scroll, key up)

// mount -> update -> unmount
// mount: first time component appear on the screen
// unmount: component disappear from the screen

// mount vs load vs update vs render
// render = update : every time React execute the function component
// load: when all resources (JS, CSS, images) are loaded

// memo / React.memo : HOC - higher order component
// useCallback used to memoize functions
// useMemo used to memoize values

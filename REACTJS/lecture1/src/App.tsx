import { useState, type ChangeEvent } from "react";
import "./App.css";

interface TodoItem {
  name: string;
  status: 'todo' | 'done';
  id: number;
}

function App() {
  let [value, setValue] = useState("");
  let [list, setList] = useState<TodoItem[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // console.log(value)
  };

  const handleSubmit = () => {
    setList([...list, { name: value, status: 'todo', id: Date.now() }]);
    console.log(list);
  };

  return (
    <>
      <div>
        <input type='text' onChange={handleInput} />
        <button onClick={handleSubmit}>add</button>
      </div>
      <div>
        {list.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
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

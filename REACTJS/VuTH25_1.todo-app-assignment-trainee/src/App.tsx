import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  status: "todo" | "done";
}

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState<Item[]>([]);
  const [filter, setFilter] = useState<"all" | "todo" | "done">("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("todo-list");
    console.log(saved);
    if (saved) setList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("todo-list", JSON.stringify(list));
    }
  }, [list]);

  const handleSubmit = () => {
    if (value.trim() == "") return;

    const newItem: Item = {
      id: Date.now(),
      name: value,
      status: "todo",
    };

    setList([...list, newItem]);
    setValue("");
  };

  const handleToggleStatus = (id: number) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "todo" ? "done" : "todo" }
          : item,
      ),
    );
  };

  const filteredList = list.filter((item) => {
    if (filter === "all") {
      return true;
    } else {
      return item.status === filter;
    }
  });

  const HandleDeleteTask = (id: number) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="flex min-h-screen flex-col items-center pt-20">
      <div className="mt-10 mb-8 flex items-center justify-center gap-3">
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          onChange={(e) => setValue(e.target.value)}
          className="border-3 border-[#FBBF24] p-2"
          type="text"
          value={value}
        />
        <button
          onClick={handleSubmit}
          className="rounded-sm bg-[#10b981] p-1.5"
        >
          ADD
        </button>
      </div>
      <div className="size-80 space-y-5 border-2 border-amber-500 bg-yellow-100 p-5">
        <div className="flex justify-between">
          <p>List:</p>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value as "all" | "todo" | "done");
            }}
            className="rounded-lg border-2 border-amber-300"
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          {filteredList.length > 0 && (
            <ul>
              {filteredList.map((item, index) => (
                <li
                  onMouseOver={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(0)}
                  key={item.id}
                  className={`mb-2 flex cursor-pointer justify-between border-b border-amber-300 text-lg ${item.status === "done" ? "text-gray-500 line-through" : ""}`}
                  onClick={() => handleToggleStatus(item.id)}
                >
                  {index + 1}. {item.name}
                  <Trash
                    onClick={() => HandleDeleteTask(item.id)}
                    className={`${hoveredId === item.id ? "text-red-500 hover:fill-red-400" : "invisible"}`}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

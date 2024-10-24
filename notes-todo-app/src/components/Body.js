import "../App.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import InputSection from "./InputSection";

 function Body() {
  const [notes, setNotes] = useState([]);
  const [getId, setgetId] = useState(0);

  useEffect(() => {
    fetchAPITask();
  }, []);
  const fetchAPITask = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    const result = await data.json();
    console.log(result);
    setNotes(result);
  };

  const addNotesTodo = (currentTask) => {
    const newTasks = [...notes];
    if (currentTask.trim().length > 0) {
      newTasks.unshift({
        id: Date.now(),
        title: currentTask,
      });
      setNotes(newTasks);
    }
  };

  const removeTask = (idd) => {
    console.log(getId);
    const updatData = notes.map((task) => {
      if (task.id === idd) {
        task.completed = true;
      }
      return task;
    });
    setNotes(updatData);
  };
  return (
    <>
      <div className="mx-auto my-10 w-1/2 h-96 bg-yellow-200 text-center">
        <h1 className="pt-2 text-center font-bold">Notes Todo App</h1>
        <InputSection addNotesTodo={addNotesTodo} />
        <div className="overflow-auto h-64 w-full p-2 text-left">
          <ul>
            <TodoList
              notes={notes}
              removeTask={removeTask}
              setgetId={setgetId}
            />
          </ul>
        </div>
      </div>
    </>
  );
}


export default Body
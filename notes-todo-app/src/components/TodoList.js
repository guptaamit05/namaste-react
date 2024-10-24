import React from "react";

const TodoList = ({ notes, removeTask }) => {
  return notes.map((note) => {
    return (
      <li
        key={Math.random()}
        className={"p-1 mb-2 flex justify-between "+(note.completed ? "line-through" : "bg-yellow-50")}
      >
        <span className="pl-3"> {note.title}</span>
        <div>
          <span
            onClick={() => {
              removeTask(note.id);
            }}
            className="cursor-pointer text-lg mr-2"
          >
           {!note.completed &&  "✖" }
          </span>
        </div>
      </li>
    );
  });
};

export default TodoList;

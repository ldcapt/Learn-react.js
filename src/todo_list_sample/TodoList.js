import React, { useState } from "react";



const TodoList = () => {
  const [job, setJob] = useState("");
  const [todo, setTodo] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    return storageJob ?? [];
  });

  const handleSubmit = () => {
    setTodo((prev) => {
      const newJob = [...prev, job];
      const jsonJob = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJob);
      return newJob;
    });

    setJob("");
  };

  return ( 
    <div>
      <h1>Todo List</h1>

      <div style={{ padding: 32 }}>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>

        <ul>
          {todo.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 


export default TodoList;
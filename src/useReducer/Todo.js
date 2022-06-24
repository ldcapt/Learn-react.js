import React, { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};

const CREATE_JOB = "create_job";
const UPDATE_JOB = "update_job";
const DELETE_JOB = "delete_job";

const reducer = (state, action) => {
  switch (action) {
    case CREATE_JOB:
      return state.job;
    case UPDATE_JOB:
      break;
    case DELETE_JOB:
      break;
    default:
      throw new Error('Invalid action')
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const jobInput = useRef();

  const handleSubmit = () => {
    jobInput.current.focus();
  };

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={jobInput}
        type="text"
        value={job}
        placeholder="Enter todo..."
      />
      <button>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} &time;</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

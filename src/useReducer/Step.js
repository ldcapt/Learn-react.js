import React, { useState, useReducer } from "react";

// useState
// 1. Init sate: 0
// 2. Action: Up (+1) / Down (-1)

// useReducer
// 1. Init state: 0
// 2. Action: Up (+1) / Down (-1)
// 3. Reducer
// 4. Dispatch

// Init sate
const initState = 0;

// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action')
  }
}



const Step = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
};

export default Step;

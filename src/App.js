import "./App.css";
import Content from "./mount_unmount_sample/Content";
import Chat from "./chat_app/Chat";
import React, { useState, useCallback } from "react";
import Counter from "./useCallback/Counter";
import Form from "./useMemo/Form";
import Step from "./useReducer/Step";
import Todo from "./useReducer/Todo";

const App = function () {
  const [isShow, setIsShow] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showStep, setShowStep] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
    setShowChat(false);
    setShowStep(false)
    setShowForm(false);
  };

  const handleShowChat = () => {
    setShowChat(!showChat);
    setIsShow(false);
    setShowStep(false)
    setShowForm(false);
  };

  const handleIncrease = () => {
    setCount((prev) => ++prev);
  };

  const handleCallback = useCallback(() => {
    setCount((prev) => ++prev);
  }, []);

  const handleShowForm = () => {
    setShowForm(!showForm);
    setShowChat(false);
    setIsShow(false);
    setShowStep(false)
  };

  const handleShowStep = () => {
    setShowStep(!showStep)
    setShowForm(false);
    setShowChat(false);
    setIsShow(false);
  }

  return (
    <div style={{ margin: "8px" }}>
      <button
        onClick={handleShow}
        style={{
          backgroundColor: isShow ? "#000" : "#B6B6B6",
          color: isShow ? "#FFF" : "#333",
        }}
      >
        Toggle content
      </button>
      <button
        onClick={handleShowChat}
        style={{
          backgroundColor: showChat ? "#000" : "#B6B6B6",
          color: showChat ? "#FFF" : "#333",
        }}
      >
        Mount Chat
      </button>
      <button
        onClick={handleShowForm}
        style={{
          backgroundColor: showForm ? "#000" : "#B6B6B6",
          color: showForm ? "#FFF" : "#333",
        }}
      >
        Mount Form
      </button>

      <button
        onClick={handleShowStep}
        style={{
          backgroundColor: showStep ? "#000" : "#B6B6B6",
          color: showStep ? "#FFF" : "#333",
        }}
      >
        Mount Step Counter
      </button>

      <Counter onIncrease={handleCallback} />
      <h1>{count}</h1>
      {isShow && <Content />}
      {showChat && <Chat />}
      {showForm && <Form />}
      {showStep && <Step />}

      <Todo />
    </div>
  );
};

export default App;

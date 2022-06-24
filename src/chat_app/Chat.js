import React, { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "Bài học số 1",
  },
  {
    id: 2,
    name: "Bài học số 2",
  },
  {
    id: 3,
    name: "Bài học số 3",
  },
];

const Chat = () => {
  const [lessionId, setLessionId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    }

    window.addEventListener(`lession-${lessionId}`, handleComment)
    return () => {
      window.removeEventListener(`lession-${lessionId}`, handleComment);
    };
  }, [lessionId]);

  return (
    <div>
      <ul>
        {lessons.map((lession) => (
          <li
            key={lession.id}
            style={{
              color: lessionId === lession.id ? "red" : "inherit",
            }}
            onClick={() => setLessionId(lession.id)}
          >
            {lession.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;

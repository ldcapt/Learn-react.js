import React, { memo } from "react";

const Counter = ({ onIncrease }) => {
  console.log("re-render");

  return (
    <div>
      <button onClick={onIncrease}>Step counter</button>
    </div>
  );
};

export default memo(Counter);

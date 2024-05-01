// TaskCard.js
import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <p>{task.title}</p>
    </div>
  );
};

export default TaskCard;

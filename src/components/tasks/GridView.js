import React, { useEffect, useState } from "react";

const DragDropExample = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Task 1", status: "todo" },
    { id: 2, task: "Task 2", status: "todo" },
    { id: 3, task: "Task 3", status: "todo" },
  ]);
  const [dropIndicator, setDropIndicator] = useState(null);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
    setDropIndicator(null);
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");

    const task = tasks?.find((task) => +task.id === +taskId);

    if (task) {
      task.status = status;

      setTasks((prevTasks) =>
        prevTasks?.map((_task) => (_task.id === task?.id ? task : _task))
      );
    }

    setDropIndicator(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDropIndicator(e.currentTarget.id);
  };

  const renderTasks = (status) => {
    return tasks
      ?.filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
          onDragEnd={handleDragEnd}
          className={`w-full p-2 bg-gray-100 rounded ${
            dropIndicator === status ? "bg-blue-200 " : ""
          }`}
        >
          {task.task}
        </div>
      ));
  };

  return (
    <div className="flex flex-col p-6 h-screen ">
      <div className="grid grid-cols-3 gap-2">
        <h2 className="text-center ">Todo</h2>
        <h2 className="text-center ">In Progress</h2>
        <h2 className="text-center ">Done</h2>

        <div
          id="todo"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "todo")}
          className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${
            dropIndicator === "todo" ? "bg-blue-100 " : ""
          }`}
        >
          {renderTasks("todo")}
        </div>

        <div
          id="in-progress"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "in-progress")}
          className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${
            dropIndicator === "in-progress" ? "bg-blue-100 " : ""
          }`}
        >
          {renderTasks("in-progress")}
        </div>

        <div
          id="done"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "done")}
          className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${
            dropIndicator === "done" ? "bg-blue-100 " : ""
          }`}
        >
          {renderTasks("done")}
        </div>
      </div>
    </div>
  );
};

export default DragDropExample;

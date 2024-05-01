// store.js
import create from "zustand";
let taskIdCounter = 1;
const useStore = create((set) => ({
  tasks: {
    planned: [],
    inProgress: [],
    completed: [],
  },
  addTask: (status, task) => {
    const newTask = { ...task, id: `${taskIdCounter++}` }; // Generate unique ID
    set((prevState) => ({
      tasks: {
        ...prevState.tasks,
        [status]: [...prevState.tasks[status], newTask],
      },
    }));
  },
  moveTask: (
    sourceStatus,
    destinationStatus,
    sourceIndex,
    destinationIndex,
    taskId
  ) => {
    set((prevState) => {
      const taskToMove = prevState.tasks[sourceStatus][sourceIndex];
      const updatedSourceTasks = [...prevState.tasks[sourceStatus]];
      updatedSourceTasks.splice(sourceIndex, 1);

      const updatedDestinationTasks = [...prevState.tasks[destinationStatus]];
      updatedDestinationTasks.splice(destinationIndex, 0, taskToMove);

      return {
        tasks: {
          ...prevState.tasks,
          [sourceStatus]: updatedSourceTasks,
          [destinationStatus]: updatedDestinationTasks,
        },
      };
    });
  },
}));

export default useStore;

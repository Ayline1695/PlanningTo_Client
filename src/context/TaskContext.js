import React from "react";
import {
  getTasks as getTasksService,
  createTask as createTaskService,
} from "../services/task.service";

export const TaskContext = React.createContext({});

function TaskProvider({ children }) {
  const [task, setTasks] = React.useState([]);

  const getTasks = async () => {
    const { data } = await getTasksService();
    setTasks(data);
  };

  const createTask = async (t) => {
    const { data: task } = await createTaskService(t);
    setTasks((state) => state.concat(task));
  };

  return (
    <TaskContext.Provider value={{ getTasks, task, createTask }}>
      {children}
    </TaskContext.Provider>
  );
}

//custom hook
export function useTask() {
  return React.useContext(TaskContext);
}
export default TaskProvider;

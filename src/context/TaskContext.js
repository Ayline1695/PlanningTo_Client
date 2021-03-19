import React from "react";
import {
  getTasks as getTasksService,
  createTask as createTaskService,
} from "../services/task.service";

//Lo del map debe ser que no tenes valor default y en el primer render task es undefined ya que viene del backend
//Ponele un array vacio de default

export const TaskContext = React.createContext({});

function TaskProvider({ children }) {
  const [task, setTasks] = React.useState([]);

  const getTasks = async () => {
    const { data } = await getTasksService();
    console.log("Task data: ", data);
    setTasks(data);
  };

  const createTask = async (t) => {
    const { data: task } = await createTaskService(t);
    setTasks((state) => state.concat(task));
  };

  // el valor se pasa a todos los hijos
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

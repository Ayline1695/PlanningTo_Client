import React from "react";
import { useTask } from "../../../context/TaskContext";
//importar el contexto que se quiera utilizar
import NewTask from "../../../components/Task/NewTask";
import { deleteTask } from "../../../services/task.service";

function Task() {
  const { task, getTasks } = useTask(); // custom hook
  console.log("TASK: ", task);
  React.useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <div>
        {task.map((t) => (
          <div key={t._id}>
            <h3>{t.name}</h3>
            <button
              onClick={async () => {
                const remove = await deleteTask(task.id);
                console.log("remove", remove);
                getTasks((state) => state.filter((t) => t.id === task.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <NewTask />
      </div>
    </div>
  );
}

export default Task;

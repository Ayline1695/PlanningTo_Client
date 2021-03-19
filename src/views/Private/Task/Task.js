import React from "react";
import { Link } from "react-router-dom";
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
        {task.map((t, idx) => (
          <div key={idx}>
            <Link to={`/task/${t._id}`}>
              <h3>{t.name}</h3>
            </Link>
            <button
              onClick={async () => {
                const remove = await deleteTask(task.id);
                console.log("removed task", remove);
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

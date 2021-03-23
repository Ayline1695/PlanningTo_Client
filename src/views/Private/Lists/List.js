import React from "react";
import "./List.css";
import { useList } from "../../../context/listContext";
//importar el contexto que se quiera utilizar
import NewPostIt from "../../../components/List/NewPostIt";
import { deleteList } from "../../../services/list.service";

function List() {
  const { lists, getLists } = useList(); // custom hook
  console.log("LISTS: ", lists);
  React.useEffect(() => {
    getLists();
  }, []);
  return (
    <div>
      <div>
        {lists.map((list, idx) => (
          <div key={idx} className="listPage">
            <h3>{list.title}</h3>
            <p>{list.description}</p>
            <button
              onClick={async () => {
                const remove = await deleteList(lists.id);
                console.log("removed list", remove);
                getLists((state) => state.filter((l) => l.id === lists.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;

import React from "react";
import { useList } from "../../../context/listContext";
//importar el contexto que se quiera utilizar
import NewList from "../../../components/List/NewList";
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
        {lists.map((list) => (
          <div key={list._id}>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
            <button
              onClick={async () => {
                const remove = await deleteList(lists.id);
                console.log("remove", remove);
                getLists((state) => state.filter((l) => l.id === lists.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <NewList />
      </div>
    </div>
  );
}

export default List;

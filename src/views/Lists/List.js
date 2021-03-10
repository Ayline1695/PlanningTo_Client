import React from "react";
import { useList } from "../../context/listContext";
//importar el contexto que se quiera utilizar
import NewList from "../../components/List/NewList";

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
          <div>
            <h3>{list.title}</h3>
            <p>{list.description}</p>
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

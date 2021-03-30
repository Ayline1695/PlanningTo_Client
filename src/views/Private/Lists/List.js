import React from "react";
import "./List.css";
import { useList } from "../../../context/listContext";
import { deleteList } from "../../../services/list.service";

function List() {
  const { lists, getLists } = useList(); // custom hook

  React.useEffect(() => {
    getLists();
  }, []);
  return (
    <div>
      <div className="listbox">
        {lists.map((list) => (
          <div key={list._id} className="listPage">
            <div className="list">
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </div>
            <button
              onClick={async () => {
                const remove = await deleteList(lists.id);
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

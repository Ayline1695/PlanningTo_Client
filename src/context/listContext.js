import React from "react";
import {
  getLists as getListsService,
  createList as createListService,
} from "../services/list.service";

export const ListContext = React.createContext({});

function ListProvider({ children }) {
  const [lists, setLists] = React.useState([]);

  const getLists = async () => {
    const { data } = await getListsService();
    setLists(data);
  };

  const createlist = async (l) => {
    const { data: list } = await createListService(l);
    setLists((state) => state.concat(list));
  };

  return (
    <ListContext.Provider value={{ getLists, lists, createlist }}>
      {children}
    </ListContext.Provider>
  );
}

//custom hook
export function useList() {
  return React.useContext(ListContext);
}
export default ListProvider;

import { useState } from "react";
import * as C from "./App.Styles";
import { Item } from "./types/Item";
import { ListItem } from "./Components/ListItem";
import { AddArea } from "./Components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: "Shopping", done: false },
    { id: 1, name: "Buy bread", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>TO-DO List</C.Header>

        {/* Area add new TODO */}
        <AddArea onEnter={handleAddTask} />

        {/* Area to print in screen TODO list of items */}
        {list.map((item, index) => {
          return <ListItem key={index} item={item} />;
        })}
      </C.Area>
    </C.Container>
  );
};

export default App;

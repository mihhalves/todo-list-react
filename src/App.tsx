import { useState } from "react";
import * as C from "./App.Styles";
import { Item } from "./types/Item";
import { ListItem } from "./Components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: "Shopping", done: false },
    { id: 1, name: "Buy bread", done: true },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>TO-DO List</C.Header>

        {/* Area add new TODO */}

        {/* Area to print in screen TODO list of items */}
        {list.map((item, index) => {
          return <ListItem key={index} item={item} />;
        })}
      </C.Area>
    </C.Container>
  );
};

export default App;

import React, {useState} from "react";
import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/WelcomeMsg";
import { TodoDataContext } from "./Store/TodoContext";

function App() {
    let [itemData, setItemData] = useState([]);
    let onClick = (itemName, itemDate) => {
          setItemData((currValue)=>[...currValue,{work: itemName, date: itemDate} ]);
      
      
      // let newItemData = [...itemData,{work: itemName, date: itemDate} ];
      //   setItemData(newItemData);
    };
    let handleOnDelete = (work) => {
        let newItemData = itemData.filter((item) => item.work !== work);
        setItemData(newItemData);
    };

    return (
        <TodoDataContext.Provider value={itemData}>
        
            <Appname></Appname>
            <AddTodo handleOnClick={onClick}></AddTodo>
            <Welcome itemData={itemData}></Welcome> 
            <TodoItems itemData={itemData} handleDelete={handleOnDelete}></TodoItems>
        </TodoDataContext.Provider>
    );
}

export default App;

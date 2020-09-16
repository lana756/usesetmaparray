import React, {useState} from 'react';
import ListItem from "./listItem";


function App() {
  const [list, setList] = useState([1,2,3,4])

  const counterPlus =(index) => {
   const newArr = list.map((el,i) => {
     if(index === i){
       return el +1
     } return el
   } )
    console.log(newArr)
    setList((newArr))
  }
  const counterMinus =(index) => {
    const newArr1 = list.map((el, i) =>
        (index === i) ? el -1: el)
    console.log(newArr1)
    setList(newArr1)
  }
  return (
    <div >
      {list.map((el, index) =>
          < ListItem counterMinus = {counterMinus} counterPlus ={counterPlus} index = {index} el={el} key = {Math.random()}/>)}
    </div>
  );
}

export default App;

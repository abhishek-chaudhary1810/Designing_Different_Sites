import "./App.css";
//import usestate for state management
import { useState } from "react";
//JSX :- A Html Tag inside a javascript function
//Nesting One component into another
//In order to differentiate between html tag and component you have to look at the
//Capital letter in starting of a component
function Button({count,onClick}) {
 //count to store value and setcount to update the value of this state
  return (
  <button onClick={onClick}>clicked {count} times</button>
  );
}
//created a object to fetch and store a dummy image data
const Image_obj = {
  name: "Image show",
  imageUrl: "https://picsum.photos/200/300",
};

// creation and initiliazation of Array of Objects
const Phone = [
  { name: "Oneplus", price: "40 thousands", id: 1 },
  { name: "Apple", price: "50 thousand", id: 2 },
  { name: "Samsung", price: "60 thousand", id: 3 },
  { name: "Google", price: "70 thousand", id: 4 },
];

function App() {
  //Iterate over an array of object using map , passed array as an argument to map and created a JSX component as list
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }
  const Listitems = Phone.map((Phone) => (
    //List must have a key to differentiate between two child nodes
    <li className="Listitem" key={Phone.id}>
      {"  " + Phone.name}
      {"  " + Phone.price}
    </li>
  ));
  return (
    <div>
      <div>
        <h3> Hey there</h3>
        {/* Below used external Css and value fetching in src with curly brackets */}
        <img
          className="showimg"
          alt="Changing Images"
          src={Image_obj.imageUrl}
        ></img>
        <br></br>
        <Button count={count+1} onClick={handleClick}/>
        <Button count={count+1} onClick={handleClick} />
      </div>
      <div>
        <ul>{Listitems}</ul>
      </div>
    </div>
  );
  }
export default App;

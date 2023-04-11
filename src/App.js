import "./App.css";
//JSX :- A Html Tag inside a javascript function
//Nesting One component into another
//In order to differentiate between html tag and component you have to look at the
//Capital letter in starting of a component
function Button() {
  return <button>Click Me</button>;
}
//created a object to fetch and store a dummy image data
const Image_obj = {
  name: "Image show",
  imageUrl: "https://picsum.photos/200/300",
};
// Array of Objects
const Phone = [
  { name: "Oneplus", price: "40 thousands", id: "1" },
  { name: "Apple", price: "50 thousand", id: "2" },
];

function App() {
 //Iterate over an array of object using map , passed array as an argument to map and created a JSX component as list
  const Listitems = Phone.map((Phone) => (
    <li key={Phone.id}>
      {"  "+ Phone.name}
      {"  "+Phone.price}
    </li>
  ));
  //console.log(Listitems);
  return (
    <div>
      <div>
        <h3> Hey there</h3>
        {/* Below used external Css and value fetching in src with curly brackets */}
        <img className="showimg" src={Image_obj.imageUrl}></img>
        <br></br>
        <Button />
        <Button />
      </div>
      <div>
        <ul>
         {Listitems}
        </ul>
      </div>
    </div>
  );
}

export default App;

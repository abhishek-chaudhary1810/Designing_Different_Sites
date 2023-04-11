import "./App.css";
//JSX :- A Html Tag inside a javascript function
//Nesting One component into another
//In order to differentiate between html tag and component you have to look at the
//Capital letter in starting of a component
function Button() { 
  return <button>Click Me</button>;
}
//created a object to fetch and store a dummy image data
const Image_obj={
  name: "Image show",
  imageUrl: "https://picsum.photos/200/300",

}

function App() {
  return (
    <div>
      <h3> Hey there</h3>
      {/* Below used external Css and value fetching in src with curly brackets */}
      <img className="showimg" src={Image_obj.imageUrl} ></img>
      <br></br>
      <Button />
          </div>
  );
}

export default App;

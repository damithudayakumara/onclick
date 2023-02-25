import React, { useState } from "react";

function App() {
  // const [headingText,setHeadingText]=useState("clicked");
  const [headingColor, setHeadingColor] = useState(false);

  function ChangeBtnColor() {
    setHeadingColor(true);
  }
  function ChangeBtnColorOut() {
    setHeadingColor(false);
  }
  const [name, setname] = useState("");

  function handleChange(event) {
    setname(event.target.value);
  }
  // function HeadingClicked(){
  //   setHeadingText("submitted");
  const [fname, fsetname] = useState("");
  function fhandleClick() {
    fsetname(name);
  }

  return (
    <div className="container">
      <h1>hello {fname}</h1>
      <h1>hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: headingColor ? "black" : "white" }}
        onMouseOver={ChangeBtnColor}
        onMouseOut={ChangeBtnColorOut}
        onClick={fhandleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

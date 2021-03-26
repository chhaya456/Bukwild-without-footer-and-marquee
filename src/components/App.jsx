import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  // var isLoggedIn = false;

  const [titleId, setTitleId] = useState("Industries");

  function updateTitle(newtitle) {
    setTitleId(newtitle);
    //console.log(newtitle);
  }

  return (
    <div
      style={{
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage:
          titleId === "Industries"
            ? 'url("images/slide_one.jpg")'
            : titleId === "Services"
            ? 'url("images/slide_two.jpg")'
            : titleId === "About Us"
            ? 'url("images/slide_three.jpg")'
            : null
      }}
    >
      <div className="main">
        {" "}
        <Main onAdd={updateTitle} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

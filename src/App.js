import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard";

// console.log(React);
function App() {
  const [photo, setPhoto] = useState("");
  const [photoArray, setPhotoArray] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https:api.nasa.gov/planetary/apod?api_key=cvQfsM1Yd2opQ3UAQEufPMMPRinnTReNGgUeirlt&date=2019-04-27"
      )
      .then(res => {
        setPhoto(res.data);
        console.log(res.data);
      });
  }, []);
  // const [state2, setState2] = useState(2);
  // console.log(state1, state2);
  return (
    <div className="App">
      <PhotoCard
        title={photo.title}
        url={photo.url}
        explanation={photo.explanation}
        date={photo.date}
      />
    </div>
  );
}

export default App;

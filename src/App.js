import "./App.css";
import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [gifs, setGifs] = useState([]);

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      const API_KEY = "rRoGFS0x9Ep9YZWikgAaj85pMXC7rquM";
      const query = event.target.value;
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=20`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setGifs(data.data.slice(0, 20));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="app">
      <Header handleKeyPress={handleKeyPress} />
      <Main gifs={gifs} />
      <Footer />
    </div>
  );
}

export default App;

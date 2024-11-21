import { useState } from "react";
import "./App.css";

// Objectives
// generate random hex code for color
//generate rgb code for color
function App() {
  const [color, setColor] = useState("#ffffff");
  const [colorType, setColorType] = useState("hex");

  function generateHexCode() {
    const hexValue = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexCode = "#";
    let count = 0;
    while (count !== 6) {
      hexCode += hexValue[Math.floor(Math.random() * hexValue.length)];
      count++;
    }
    setColor(hexCode);
  }

  function generateRgbValue() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g}, ${b})`);
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <button
        onClick={() => {
          setColorType("hex");
          generateHexCode();
        }}
      >
        Generate Hex code
      </button>
      <button
        onClick={() => {
          setColorType("rgb");
          generateRgbValue();
        }}
      >
        Generate rgb code
      </button>
      {colorType === "hex" && <h1>Hex color {color}</h1>}
      {colorType === "rgb" && <h1>RGB color {color}</h1>}
    </div>
  );
}

export default App;

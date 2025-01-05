import { useState } from "react";

function App() {
  let [color, colorHandler] = useState("black");

  return (
    <>
      <div className="bgChanger" style={{ backgroundColor: color }}>
        <div className="container">
          <div>
            <ul className="bgChangerMain">
              <li>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    colorHandler("red");
                  }}
                >
                  red
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "blue" }}
                  onClick={() => {
                    colorHandler("blue");
                  }}
                >
                  blue
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "yellow" }}
                  onClick={() => {
                    colorHandler("yellow");
                  }}
                >
                  yellow
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "pink" }}
                  onClick={() => {
                    colorHandler("pink");
                  }}
                >
                  pink
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "orange" }}
                  onClick={() => {
                    colorHandler("orange");
                  }}
                >
                  orange
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "aqua" }}
                  onClick={() => {
                    colorHandler("aqua");
                  }}
                >
                  aqua
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "black" }}
                  onClick={() => {
                    colorHandler("black");
                  }}
                >
                  black
                </button>
              </li>
              <li>
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={() => {
                    colorHandler("green");
                  }}
                >
                  green
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

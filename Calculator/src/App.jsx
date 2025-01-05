import { useState } from "react";

const App = () => {
  let [value, setValue] = useState("");

  const setOprands = (event) => {
    value += event.target.textContent;
    setValue(value);
  };

  const calculate = () => {
    setValue(eval(value));
  };

  const allClear = () => {
    setValue("");
  };

  const deleteValue = () => {
    value = String(value);
    setValue(value.slice(0, value.length - 1));
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            className="value"
            value={value == "" ? 0 : value}
            readOnly
          />
          <div className="row">
            <span onClick={allClear} className="btn specialOperator">
              AC
            </span>
            <span onClick={deleteValue} className="btn specialOperator">
              DEL
            </span>
            <span onClick={setOprands} className="btn operator">
              /
            </span>
            <span onClick={setOprands} className="btn operator">
              *
            </span>
          </div>
          <div className="row">
            <span onClick={setOprands} className="btn">
              7
            </span>
            <span onClick={setOprands} className="btn">
              8
            </span>
            <span onClick={setOprands} className="btn">
              9
            </span>
            <span onClick={setOprands} className="btn operator">
              -
            </span>
          </div>
          <div className="row">
            <span onClick={setOprands} className="btn">
              4
            </span>
            <span onClick={setOprands} className="btn">
              5
            </span>
            <span onClick={setOprands} className="btn">
              6
            </span>
            <span onClick={setOprands} className="btn operator">
              +
            </span>
          </div>
          <div className="row">
            <span onClick={setOprands} className="btn">
              1
            </span>
            <span onClick={setOprands} className="btn">
              2
            </span>
            <span onClick={setOprands} className="btn">
              3
            </span>
            <span onClick={setOprands} className="btn">
              0
            </span>
          </div>
          <div className="row">
            <span onClick={setOprands} className="btn">
              00
            </span>
            <span onClick={setOprands} className="btn">
              .
            </span>
            <span onClick={calculate} className="btn operator equals">
              =
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;

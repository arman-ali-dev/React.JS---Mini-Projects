import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const [passLength, setLength] = useState(5);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [symbolAllowed, setSymbolAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copyIcon, setCopyIcon] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";

    let uppercaseSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowercaseSet = "qwertyuiopasdfghjklzxcvbnm";
    let numberSet = "0123456789";
    let symbolSet = "~`!@#$%^&*()_-+=}{[]:;'><?/,.";

    if (uppercaseAllowed) str += uppercaseSet;
    if (lowercaseAllowed) str += lowercaseSet;
    if (numberAllowed) str += numberSet;
    if (symbolAllowed) str += symbolSet;

    for (let i = 1; i <= passLength; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setCopyIcon("fa-solid fa-copy");
    setPassword(pass);
  }, [
    uppercaseAllowed,
    passLength,
    lowercaseAllowed,
    numberAllowed,
    symbolAllowed,
  ]);

  useEffect(() => {
    passwordGenerator();
  }, [
    passLength,
    lowercaseAllowed,
    uppercaseAllowed,
    symbolAllowed,
    numberAllowed,
  ]);

  const passRef = useRef(null);
  const passwordcopy = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  });

  return (
    <>
      <div className="card">
        <h2 className="text-center text-2xl">password Generator</h2>
        <div className="inputMain">
          <input
            type="text"
            className="border-none outline-none mt-[23px]"
            id="passwordInput"
            value={password}
            ref={passRef}
          />
          <button
            className=" bg-transparent border-none text-white mr-1 mt-1 text-xl cursor-pointer"
            id="copyBtn"
            onClick={passwordcopy}
          >
            <i
              className={copyIcon}
              onClick={() => {
                setCopyIcon("fa-solid fa-clipboard-check");
              }}
            ></i>
          </button>
        </div>

        <div className="main">
          <div className="mainChild w-100 flex justify-between items-center mt-[16px] text-base px-6">
            password Length
            <input
              type="range"
              className="cursor-pointer"
              id="progress"
              max={20}
              value={passLength}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <span
              id="progress_value"
              className="inline-block text-white text-center"
            >
              {passLength}
            </span>
          </div>

          <div className="mainChild w-100 flex justify-between items-center mt-[16px] text-base px-6">
            Uppercase
            <input
              type="checkbox"
              id="select"
              checked={uppercaseAllowed}
              onChange={() => setUppercaseAllowed(!uppercaseAllowed)}
            />
            <label
              className="on-off inline-block cursor-pointer"
              htmlFor="select"
            ></label>
          </div>
          <div className="mainChild w-100 flex justify-between items-center mt-[16px] text-base px-6">
            Lowercase
            <input
              type="checkbox"
              id="select2"
              checked={lowercaseAllowed}
              onChange={() => setLowercaseAllowed(!lowercaseAllowed)}
            />
            <label
              className="on-off2 inline-block cursor-pointer"
              htmlFor="select2"
            ></label>
          </div>
          <div className="mainChild w-100 flex justify-between items-center mt-[16px] text-base px-6">
            Number
            <input
              type="checkbox"
              id="select3"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <label
              className="on-off3 inline-block cursor-pointer"
              htmlFor="select3"
            ></label>
          </div>
          <div className="mainChild w-100 flex justify-between items-center mt-[16px] text-base px-6">
            Symbol
            <input
              type="checkbox"
              id="select4"
              checked={symbolAllowed}
              onChange={() => setSymbolAllowed(!symbolAllowed)}
            />
            <label
              className="on-off4 inline-block cursor-pointer"
              htmlFor="select4"
            ></label>
          </div>

          <button
            onClick={passwordGenerator}
            className="text-white text-center border-none outline-none block cursor-pointer font-semibold rounded-lg"
            id="generateBtn"
          >
            Regenerate
          </button>
        </div>
      </div>
    </>
  );
}
export default App;

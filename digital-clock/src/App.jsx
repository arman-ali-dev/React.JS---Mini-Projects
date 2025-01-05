import { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  setInterval(() => {
    setTime(new Date());
  }, 1000);
  return (
    <>
      <div className="clock flex justify-center items-center  text-white text-[35px]">
        <span className="uppercase">{time.toLocaleTimeString()}</span>
      </div>
    </>
  );
}

export default App;

import Slot from "./components/slot";

function App() {
  let pattern = [
    ["😊", "😁", "🍒"],
    ["😊", "😊", "😊"],
    ["🍒", "😁", "🍒"],
  ];
  return (
    <>
      <div className="bg-[#e4e2e2] text-center h-[400px] w-[300px] rounded-[12px]">
        <div className="header py-4">
          <h3 className=" font-semibold text-[22px] m-0 inline-block">
            😊 Machine Slot 😊
          </h3>
        </div>

        {pattern.map((emoji, index) => (
          <Slot
            key={index}
            emoji1={emoji[0]}
            emoji2={emoji[1]}
            emoji3={emoji[2]}
          />
        ))}
      </div>
    </>
  );
}

export default App;

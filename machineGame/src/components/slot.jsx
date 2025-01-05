function Slot({ emoji1, emoji2, emoji3 }) {
  let isMatch = "";
  if (emoji1 == emoji2 && emoji1 == emoji3 && emoji2 == emoji3) {
    isMatch += "Pattern match you win!";
  } else {
    isMatch += "Pattern NOT match!";
  }
  return (
    <>
      <div className="slot">
        <ul className="flex justify-around">
          <li>{emoji1}</li>
          <li>{emoji2}</li>
          <li>{emoji3}</li>
        </ul>
        <p className="text-[17px] font-semibold mt-3">{isMatch}</p>
      </div>
    </>
  );
}

export default Slot;

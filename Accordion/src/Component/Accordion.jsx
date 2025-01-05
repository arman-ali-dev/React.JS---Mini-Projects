import { useState } from "react";

function Accordion({ question, answer }) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <div className="accordion bg-[#0083e9] text-white px-[18px] py-[10px] rounded-[8px] mb-[30px]">
        <div
          onClick={() => {
            isExpand ? setIsExpand(false) : setIsExpand(true);
          }}
          className=" flex justify-between items-center cursor-pointer   "
        >
          <span className="question text-[17px]">{question}</span>
          <span className="expand text-[30px]">{isExpand ? "-" : "+"}</span>
        </div>

        <div>{isExpand && <p>{answer}</p>}</div>
      </div>
    </>
  );
}

export default Accordion;

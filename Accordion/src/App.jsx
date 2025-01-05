import Accordion from "./Component/Accordion";

function App() {
  return (
    <>
      <div className="accordion-main bg-white rounded-[8px] px-[20px] py-[30px]">
        {data.map((value) => (
          <Accordion
            key={value.id}
            id={value.id}
            question={value.question}
            answer={value.answer}
          />
        ))}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

function Section() {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const [click, setClick] = useState(false);

  const setNoteText = (event) => {
    setNote(event.target.value);
  };

  const setTitleText = (event) => {
    setTitle(event.target.value);
  };

  const showDataList = () => {
    setData((oldData) => {
      return [...oldData, { enteredNote: note, enteredTitle: title }];
    });
    setNote("");
    setTitle("");
  };

  const deleteDataItem = (event) => {
    const newData = data.filter((element, index) => {
      return index != event.target.id;
    });

    setData(newData);
  };
  return (
    <>
      <section className="py-[120px]">
        <div className="container mx-auto">
          <div className="box relative py-[20px] px-[10px] bg-white mx-auto rounded-[8px]">
            {click && (
              <input
                value={title}
                onChange={setTitleText}
                type="text"
                placeholder="Title"
                className="text-[25px] border-none outline-none mb-[17px]"
                id="enteredTitle"
              />
            )}
            <textarea
              value={note}
              onChange={setNoteText}
              onClick={() => {
                setClick(true);
              }}
              placeholder="Write a note..."
              className="py-[5px] w-full resize-none border-none outline-none text-[15px]"
            />

            {click && (
              <button
                onClick={showDataList}
                className="absolute cursor-pointer -bottom-[23px] right-3 bg-[#fdb716] border-none outline-none w-12 h-12 rounded-full text-white text-[18px]"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            )}
          </div>

          <div className="mt-[70px] flex flex-wrap gap-10">
            {data.map((element, index) => (
              <div
                key={index}
                className="data py-[20px] px-[15px] bg-white rounded-[8px]"
              >
                <p className="title">{element.enteredTitle}</p>
                <p className="note">{element.enteredNote}</p>
                <div className="text-right ">
                  <span
                    id={index}
                    onClick={deleteDataItem}
                    className="fa-solid fa-trash text-center trash cursor-pointer bg-[#fdb716] border-none outline-none w-10 h-10 rounded-full text-white text-[15px] "
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;

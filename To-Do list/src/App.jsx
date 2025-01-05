import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [listItem, setListItem] = useState([]);

  const setValueOnList = (event) => {
    setValue(event.target.value);
  };

  const showListItem = () => {
    setListItem((oldItem) => {
      return [...oldItem, value];
    });
    setValue("");
  };

  const deleteItem = (event) => {
    let newList = listItem.filter(
      (element, index) => Number(event.target.id) !== index
    );
    setListItem(newList);
  };

  return (
    <>
      <div className="card rounded-2xl">
        <div className="pt-[40px] pb-[20px] px-[30px] bg-white rounded-t-2xl">
          <div className="flex gap-4 justify-between items-baseline">
            <input
              value={value}
              onChange={setValueOnList}
              placeholder="Add your work here..."
              type="text"
              className="enteredText border-none px-[15px] text-[18px]  outline-none text-[#020617]"
            />
            <button
              onClick={showListItem}
              className="addBtn bg-[#020617] text-white text-[16px] py-[10px] px-[30px] rounded-[40px] cursor-pointer"
            >
              Add
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-[20px]">Today</h3>
            <p className="mt-[5px] tex text-[16px]">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="main bg-slate-950 py-[40px] px-[30px] rounded-b-2xl ">
          <ul className="text-white" id="listMain">
            {listItem.map((item, index) => (
              <li key={index}>
                <span className="text">{item}</span>
                <button
                  id={index}
                  onClick={deleteItem}
                  className="fa-solid fa-xmark deleteWork outline-none border-none text-[17px] text-white bg-slate-950
              rounded-full cursor-pointer flex justify-center items-center"
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

const App = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Milk",
    },
  ]);
  const [value, setValue] = useState("");
  const onAddNewItem = () => {
    setList((prev) => {
      return [...prev, { id: prev.length + 1, name: value }];
    });
    setValue("");
  };
  const onDeleteListItem = (id) => {
    setList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="w-full mt-4 flex flex-col gap-4 justify-center items-center">
      <input
        className="border border-gray-600"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={onAddNewItem}
        className="border border-gray-400 rounded-md px-2"
      >
        Add Item
      </button>
      <h1 className="text-3xl text-gray-800">List</h1>
      <ul className="flex flex-col gap-2">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className="flex justify-between items-center w-96 border border-gray-400 px-2 py-2"
            >
              <span>{item.name}</span>
              <button
                onClick={() => {
                  onDeleteListItem(item.id);
                }}
                className="border border-gray-400 bg-red-400 text-white rounded-md px-2"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

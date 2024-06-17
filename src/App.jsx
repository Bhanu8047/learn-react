import { useState } from "react";
// import CountryVowelCount from "./component/CountryVowelCount";
import "./App.css";
import EditListItem from "./component/EditListItem";

const localList = localStorage.getItem("countries");

const App = () => {
  const datalist = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "UK" },
    { id: 4, name: "Canada" },
    { id: 5, name: "Australia" },
    { id: 6, name: "Japan" },
    { id: 7, name: "China" },
    { id: 8, name: "Russia" },
    { id: 9, name: "Brazil" },
    { id: 10, name: "Germany" },
    { id: 11, name: "France" },
    { id: 12, name: "Italy" },
    { id: 13, name: "Spain" },
    { id: 14, name: "Mexico" },
    { id: 15, name: "South Korea" },
    { id: 16, name: "Indonesia" },
    { id: 17, name: "Netherlands" },
    { id: 18, name: "Turkey" },
    { id: 19, name: "Saudi Arabia" },
    { id: 20, name: "Switzerland" },
    { id: 21, name: "Sweden" },
    { id: 22, name: "Poland" },
    { id: 23, name: "Belgium" },
    { id: 24, name: "Argentina" },
    { id: 25, name: "Thailand" },
  ];
  const [list, setList] = useState(
    JSON.parse(localList) || [{ id: 1, name: "India" }]
  );
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState({
    id: 0,
    name: "",
  }); // [1]
  const [value, setValue] = useState("");
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const onAddNewItem = () => {
    if (value === "") {
      setError({ isError: true, message: "Please enter a value!" });
      return;
    }
    setList((prev) => {
      return [...prev, { id: prev[prev.length - 1].id + 1, name: value }];
    });
    setValue("");
    setError({ isError: false, message: "" });
  };

  const onDeleteListItem = (id) => {
    setList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-slate-800">
      <input
        className="border border-gray-600 rounded-md px-2 py-1 w-96 text-gray-800"
        type="text"
        list="countries"
        name="country"
        id="country"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <datalist id="countries">
        {datalist.map((item) => {
          return <option key={item.id} value={item.name} />;
        })}
      </datalist>
      {error.isError && (
        <div className="text-white rounded py-1 px-2 bg-red-500">
          {error.message}
        </div>
      )}
      <button
        onClick={onAddNewItem}
        className="border border-gray-400 rounded-md px-2"
      >
        Add Item
      </button>
      <progress className="w-96" value={list.length} max={datalist.length} />
      <h1 className="text-3xl text-gray-800">List</h1>
      <ul className="flex flex-col gap-2">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className="flex justify-between items-center w-96 border border-gray-400 px-2 py-2"
            >
              <span>{item.name}</span>
              <div className="flex gap-2">
                <button
                  className="border border-gray-400 bg-blue-400 text-white rounded-md px-2"
                  onClick={() => {
                    setIsEditing((prev) => !prev);
                    setItem(item); // [2]
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDeleteListItem(item.id);
                  }}
                  className="border border-gray-400 bg-red-400 text-white rounded-md px-2"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className="bg-orange-500 rounded-md px-2 py-1 capitalize hover:bg-orange-800"
        onClick={() => {
          localStorage.setItem("countries", JSON.stringify(list));
        }}
      >
        save locally
      </button>
      {isEditing && (
        <EditListItem
          item={item}
          onEdit={(value) => {
            setList((prev) => {
              return prev.map((elem) => {
                if (elem.id === item.id) {
                  return { ...elem, name: value };
                }
                return elem;
              });
            });
            setIsEditing(false);
          }}
        />
      )}
      {/*  */}
      {/* <CountryVowelCount value={value} /> */}
    </div>
  );
};

export default App;

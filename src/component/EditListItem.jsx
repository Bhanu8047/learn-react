import { useState } from "react";
import PropTypes from "prop-types";

const EditListItem = ({ onEdit, item }) => {
  const [value, setValue] = useState(item.name);
  return (
    <li className="flex justify-between items-center w-96 border border-gray-400 px-2 py-2">
      <input
        className="border border-gray-600 rounded-md px-2 py-1 w-64 text-gray-800"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="flex gap-2">
        <button
          onClick={() => {
            onEdit(value);
          }}
          className="border border-gray-400 bg-blue-400 text-white rounded-md px-2"
        >
          Save
        </button>
      </div>
    </li>
  );
};

EditListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditListItem;

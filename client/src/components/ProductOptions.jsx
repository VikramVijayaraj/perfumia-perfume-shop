import { useState } from "react";

function ProductOptions({ options }) {
  const [selected, setSelected] = useState("");

  function handleClick(value) {
    setSelected(value);
  }

  return (
    <div>
      <p className="text-gray-500">Size : {selected ? selected : options[0]}</p>

      <ul className="flex gap-2 my-2">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className="border-2 rounded-sm px-2 py-1 cursor-pointer"
            style={{ borderColor: selected === option && "black" }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductOptions;

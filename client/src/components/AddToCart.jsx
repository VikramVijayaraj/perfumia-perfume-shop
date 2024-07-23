import { useState } from "react";

function AddToCart() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center gap-3 h-14">
      <div className="flex gap-2 lg:gap-8 justify-between items-center border-2 h-full">
        <p
          className="p-4 cursor-pointer hover:bg-lime-900 hover:text-white"
          onClick={() => setCount(count - 1)}
        >
          -
        </p>
        <p>{count}</p>
        <p
          className="p-4 cursor-pointer hover:bg-lime-900 hover:text-white"
          onClick={() => setCount(count + 1)}
        >
          +
        </p>
      </div>

      <div className="flex grow bg-lime-900 h-full justify-center cursor-pointer">
        <p className="text-center p-4 h-full text-white ">Add to cart</p>
      </div>
    </div>
  );
}

export default AddToCart;

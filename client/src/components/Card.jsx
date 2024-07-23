import { useLocation } from "react-router-dom";

function Card({ imgURL, name, category, price }) {
  const { pathname } = useLocation();

  if (pathname === "/categories") {
    name = category;
    category = "";
  }

  return (
    <div className="h-[400px] lg:h-[550px] w-72 shadow-lg rounded-lg mb-8 cursor-pointer hover:scale-105">
      {/* Image */}
      <div className="h-64 lg:h-3/4">
        <img className="h-full w-full object-cover rounded-t-lg" src={imgURL} />
      </div>

      {/* Details */}
      <div className="w-full space-y-3 px-4 py-5">
        <h3 className="lg:text-xl font-semibold">{name}</h3>
        {price && <p className="lg:text-lg">${price}</p>}
        <p className="text-sm uppercase">{category}</p>
      </div>
    </div>
  );
}

export default Card;

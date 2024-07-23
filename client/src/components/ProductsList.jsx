import { Link, useLocation, useParams } from "react-router-dom";
import Card from "./Card";

function ProductsList({ heading, productData }) {
  const { pathname } = useLocation();

  return (
    <div className="my-6 px-14">
      {/* Title */}
      <div className="py-4 text-center mt-20 mb-10">
        <h2 className="tracking-wide font-semibold text-xl lg:text-3xl">{heading}</h2>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.map((product, index) => (
          <Link
            key={product._id || index}
            to={pathname === "/" && `/products/${product._id}`}
            className="flex justify-center"
          >
            <Card
              imgURL={product.img}
              name={product.name}
              category={pathname === "/about" ? product.description : product.category}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;

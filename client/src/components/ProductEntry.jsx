import { Link } from "react-router-dom";

import AddToCart from "./AddToCart";
import ProductOptions from "./ProductOptions";
import x_icon from "../assets/icons/x.png";
import facebook_icon from "../assets/icons/facebook.png";
import instagram_icon from "../assets/icons/instagram.png";

function ProductEntry({ productData }) {
  return (
    <div className="lg:flex lg:justify-between md:h-auto lg:h-[600px] px-14 my-10">
      {/* Image */}
      <div className="h-64 md:h-[500px] lg:h-full lg:w-1/2">
        <img
          className="h-full w-full object-cover lg:pr-16"
          src={productData.img}
        />
      </div>

      {/* Details */}
      <div className="h-full lg:w-1/2 py-2 lg:px-4 lg:py-10 space-y-4">
        <h2 className="text-lg lg:text-2xl font-semibold">
          {productData.name}
        </h2>
        <h4 className="lg:text-xl">${productData.price}</h4>
        <p className="text-xs lg:text-md lg:pt-4 text-gray-500">
          {productData.description}
        </p>

        {productData.sizes && <ProductOptions options={productData.sizes} />}

        <div className="py-3">
          <AddToCart />
        </div>

        {/* Icons */}
        <div className="flex justify-start gap-4">
          <Link to="https://x.com/">
            <img src={x_icon} width={25} />
          </Link>
          <Link to="https://www.facebook.com/">
            <img src={facebook_icon} width={25} />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src={instagram_icon} width={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductEntry;

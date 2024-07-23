import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Banner() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [bannerProduct, setBannerProduct] = useState({});

  async function fetchProduct() {
    await axios
      .get(API_URL + "/banner-product")
      .then((response) => setBannerProduct(response.data[0]))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="h-auto lg:h-[600px] lg:flex justify-between bg-gray-50 px-14 py-14">
      {/* Product Text */}
      <div className="lg:h-full w-full lg:w-1/2 lg:pr-8 text-center lg:text-left">
        <p className="uppercase text-gray-500 my-6 text-xs lg:text-md">
          Fresh Arrival
        </p>
        <h1 className="text-lg lg:text-4xl font-bold my-6">
          {bannerProduct.name}
        </h1>
        <p className="text-sm lg:text-md text-gray-600 my-6">
          {bannerProduct.description}
        </p>
        <Link to={`/products/${bannerProduct._id}`}>
          <div className="flex justify-center lg:justify-start mb-12 lg:mb-0">
            <div className="bg-lime-900 p-2 lg:p-4 w-20 lg:w-32 text-center tracking-wide cursor-pointer uppercase text-white text-xs lg:text-sm md:text-sm">
              Details
            </div>
          </div>
        </Link>
      </div>

      {/* Product Image */}
      <div className="h-[300px] lg:h-full w-full lg:w-1/2 flex justify-center my-4 lg:my-0">
        <img
          className="h-full w-full md:w-3/4 lg:w-full object-cover lg:pl-16"
          src={bannerProduct.img}
        />
      </div>
    </div>
  );
}

export default Banner;

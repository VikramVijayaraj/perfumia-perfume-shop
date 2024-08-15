import { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList";

function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);

    await axios
      .get(API_URL + "/all-products")
      .then((response) => setAllProducts(response.data))
      .catch((err) => console.log(err));

    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="font-poppins">
      <NavBar />
      <Banner />
      {isLoading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <ProductsList heading="Featured Products" productData={allProducts} />
      )}
      <Footer />
    </div>
  );
}

export default HomePage;

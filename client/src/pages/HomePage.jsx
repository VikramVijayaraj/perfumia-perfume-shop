import { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList";

function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [allProducts, setAllProducts] = useState([]);

  async function fetchProducts() {
    await axios
      .get(API_URL + "/all-products")
      .then((response) => setAllProducts(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="font-poppins">
      <NavBar />
      <Banner />
      <ProductsList heading="Featured Products" productData={allProducts} />
      <Footer />
    </div>
  );
}

export default HomePage;

import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

function CategoriesPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [allCategories, setAllCategories] = useState([]);

  async function fetchCategories() {
    await axios
      .get(API_URL + "/categories")
      .then((response) => setAllCategories(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="font-poppins">
      <NavBar />
      <ProductsList heading="Catergories" productData={allCategories} />
      <Footer />
    </div>
  );
}

export default CategoriesPage;

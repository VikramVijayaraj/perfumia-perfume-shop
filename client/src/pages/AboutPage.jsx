import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

function AboutPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCategories() {
    setIsLoading(true);

    await axios
      .get(API_URL + "/about-us")
      .then((response) => setTeam(response.data))
      .catch((err) => console.log(err));

    setIsLoading(false);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="font-poppins">
      <NavBar />
      {isLoading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <ProductsList heading="Meet Our Team" productData={team} />
      )}
      <Footer />
    </div>
  );
}

export default AboutPage;

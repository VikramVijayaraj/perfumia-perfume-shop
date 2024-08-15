import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductEntry from "../components/ProductEntry";
import ProductReview from "../components/ProductReview";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";

function ProductPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id: productId } = useParams();

  async function fetchProduct() {
    setIsLoading(true);

    await axios
      .get(`${API_URL}/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));

    setIsLoading(false);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="font-poppins">
      <NavBar />
      {isLoading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <ProductEntry productData={product} />
      )}
      <ProductGallery />
      <ProductReview productData={product} />
      <Footer />
    </div>
  );
}

export default ProductPage;

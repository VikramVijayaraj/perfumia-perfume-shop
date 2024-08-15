import axios from "axios";
import { useEffect, useState } from "react";

function ProductGallery() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages() {
    setIsLoading(true);
    await axios
      .get(API_URL + "/image-gallery")
      .then((response) => setImages(response.data))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="px-14 my-6">
      <hr />
      <h4 className="text-lg font-semibold py-4">Gallery</h4>
      <hr />

      {isLoading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <div className="columns-3 space-y-3 py-3">
          {images &&
            images.map((image, index) => <img key={index} src={image.img} />)}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;

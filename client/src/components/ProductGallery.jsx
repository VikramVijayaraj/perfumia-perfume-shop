import axios from "axios";
import { useEffect, useState } from "react";

function ProductGallery() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [images, setImages] = useState();

  async function fetchImages() {
    await axios
      .get(API_URL + "/image-gallery")
      .then((response) => setImages(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="px-14 my-6">
      <hr />
      <h4 className="text-lg font-semibold py-4">Gallery</h4>
      <hr />

      <div className="columns-3 space-y-3 py-3">
        {images &&
          images.map((image, index) => <img key={index} src={image.img} />)}
      </div>
    </div>
  );
}

export default ProductGallery;

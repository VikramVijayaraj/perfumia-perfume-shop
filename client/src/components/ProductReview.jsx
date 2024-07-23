import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

import avatar from "../assets/images/avatar.png";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductReview() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id: productId } = useParams();

  const [userReview, setUserReview] = useState({
    name: "",
    email: "",
    rating: "",
    review: "",
    productId: productId,
  });
  const [allReviews, setAllReviews] = useState([]);

  const ratingChanged = (newRating) => {
    setUserReview((prevValues) => {
      return {
        ...prevValues,
        rating: newRating,
      };
    });
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserReview((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  async function handleSubmit() {
    await axios
      .post(API_URL + "/add-review", userReview)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  async function fetchReviews() {
    await axios
      .get(`${API_URL}/reviews/${productId}`)
      .then((response) => setAllReviews(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchReviews();
  }, [allReviews]);

  return (
    <div className="px-14">
      <hr />

      <div className="py-6 flex flex-col-reverse lg:flex-row justify-around lg:space-x-20">
        {/* User Reviews */}
        <div className="w-full">
          <h4 className="text-lg font-semibold mb-4">Reviews</h4>
          <hr />
          {allReviews.length !== 0 ? (
            <ul className="py-4 overflow-auto">
              {allReviews &&
                allReviews.map((review) => (
                  <li key={review._id} className="flex justify-between mb-6">
                    <div className="flex gap-5">
                      <img className="h-12 rounded-full" src={avatar} />
                      <div>
                        <p className="mb-5">{review.name}</p>
                        {/* <p className="text-sm">{review.email}</p> */}
                        <p>{review.review}</p>
                      </div>
                    </div>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={14}
                      activeColor="#FDA256"
                      edit={false}
                    />
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No reviews yet</p>
          )}
        </div>

        {/* Add Review */}
        <div className="space-y-3 w-full mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold">Add a review</h4>
          <p className="text-gray-500 text-xs">
            Required fields are marked <span className="text-red-500">*</span>
          </p>

          {/* Rating */}
          <div className="flex gap-2">
            <p className="uppercase text-sm">
              Your rating <span className="text-red-500">*</span>
            </p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={14}
              activeColor="#FDA256"
            />
          </div>

          <form>
            <div className="flex justify-between gap-3">
              <input
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-gray-100"
                type="text"
                placeholder="Name *"
                name="name"
                value={userReview.name}
                required
              />
              <input
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-gray-100"
                type="text"
                placeholder="Email *"
                name="email"
                value={userReview.email}
                required
              />
            </div>
            <textarea
              onChange={handleInputChange}
              className="w-full p-2 border-2 border-gray-100 my-4"
              type="text"
              name="review"
              placeholder="Your review"
              rows="5"
              value={userReview.review}
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-lime-900 text-white p-2 lg:px-4 lg:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                !userReview.name || !userReview.email || !userReview.rating
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;

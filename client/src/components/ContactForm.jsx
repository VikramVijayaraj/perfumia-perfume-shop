import { useState } from "react";

function ContactForm() {
  const [userReview, setUserReview] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserReview((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    console.log(userReview);
  }

  return (
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
        placeholder="Your message"
        rows="5"
        value={userReview.review}
      />
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-lime-900 text-white px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!userReview.name || !userReview.email}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

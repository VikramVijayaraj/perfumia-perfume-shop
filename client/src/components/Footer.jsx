function Footer() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 h-74 bg-gray-50 gap-12 px-14 py-12">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Perfumia</h2>
        <p className="text-md text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Categories</h2>
        <ul className="text-md text-gray-500">
          <li>Fresh</li>
          <li>Gourmand</li>
          <li>Woody</li>
          <li>Oriental</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Information</h2>
        <ul className="text-md text-gray-500">
          <li>About US</li>
          <li>Contact US</li>
          <li>Privacy Policy</li>
          <li>Customer Service</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
        <ul className="text-md text-gray-500">
          <li>Phone: (+63) 555 1212</li>
          <li>Fax: (+63) 555 0100</li>
          <li>Email: info@mail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

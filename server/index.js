import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import productsData from "./data/productsData.js";
import teamData from "./data/teamData.js";
import Product from "./models/Product.js";
import Team from "./models/Team.js";
import Review from "./models/Review.js";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/all-products", async (req, res) => {
  const allProducts = await Product.find({});
  return res.json(allProducts);
});

app.get("/banner-product", async (req, res) => {
  const bannerProduct = await Product.aggregate([{ $sample: { size: 1 } }]);
  return res.json(bannerProduct);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  return res.json(product);
});

app.get("/categories", async (req, res) => {
  const categories = await Product.aggregate([
    {
      $group: {
        _id: "$category",
        img: { $first: "$img" },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        img: 1,
      },
    },
  ]);
  return res.json(categories);
});

app.get("/about-us", async (req, res) => {
  const team = await Team.find({});
  return res.json(team);
});

app.get("/image-gallery", async (req, res) => {
  const images = await Product.aggregate([
    { $group: { _id: "$img" } },
    { $project: { img: "$_id", _id: 0 } },
    { $limit: 6 },
  ]);
  return res.json(images);
});

app.post("/add-review", async (req, res) => {
  const { name, email, rating, review, productId } = req.body;
  await Review.insertMany({
    name: name,
    email: email,
    rating: rating,
    review: review,
    productId: productId,
  });
  return res.json({ message: "Review added!" });
});

app.get("/reviews/:productId", async (req, res) => {
  const { productId } = req.params;
  const reviews = await Review.find({ productId: productId });
  return res.send(reviews);
});

// MongoDB Connection
mongoose
  .connect(process.env.MongoDBConn)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));

// Import Data

async function importProductData() {
  await Product.insertMany(productsData)
    .then(() => console.log("Data imported successfully!"))
    .catch((err) => console.log(err));
}
// importProductData();

async function importTeamData() {
  await Team.insertMany(teamData)
    .then(() => console.log("Data imported successfully!"))
    .catch((err) => console.log(err));
}
// importTeamData();

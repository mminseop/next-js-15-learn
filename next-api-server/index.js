const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json()); // 이거 없으면 Client에서 주는 Body 못 읽음.
app.use(cors()); // 이거 없으면 url 다른 곳에서 오는 요청 다 막힘.
const APP_PORT = 8080;

const sleep = async (time) =>
  await new Promise((resolve) => setTimeout(() => resolve(), time));

const banners = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  imgSrc: `https://picsum.photos/id/${index + 1}/200/300`,
  link: `this is link -- ${index + 1}`,
  title: `Banner Title ${index + 1}`,
}));

app.get("/api/banners", async (req, res) => {
  await sleep(5000);
  return res.json({ data: banners });
});

const categories = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  label: `category-${index + 1}`,
}));

app.get("/api/categories", async (req, res) => {
  await sleep(1000);
  return res.status(200).json({ data: categories });
});

const PRODUCT_BASE_ITEM = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  stock: 0,
  createdAt: "",
};

const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Oz-Product-${index + 1}`,
  description: `Product Descrtion ${index + 1}`,
  price: Math.floor(Math.random() * 10000 + 10000),
  stock: Math.floor(Math.random() * 20),
  createdAt:
    new Date().getTime() - Math.floor(Math.random() * 1000000 + 3600 * 1000),
}));
app.get("/api/products", async (req, res) => {
  await sleep(2000);
  return res.json({ data: products });
});

let count = 0;
app.get("/api/products/:id", async (req, res) => {
  const productId = req.params.id;
  count++;
  console.log( `api 요청 :  ${count}`);
  if (isNaN(productId)) {
    return res
      .status(400)
      .json({ isError: true, message: "(!)id must be number" });
  }
  await sleep(1000);

  return res.json({
    data: products.find(({ id }) => id === Number(productId)) ?? null,
  });
});

app.listen(APP_PORT, () => {
  console.log(`Express Running on ${APP_PORT}`);
});

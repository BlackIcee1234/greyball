import { Product } from "@/types/products";
import path from "path";
import fs from "fs";

const PRODUCTS_PATH = path.join(process.cwd(), "public", "products", "products.json");

export const getProducts = (): Product[] => {
  const data = fs.readFileSync(PRODUCTS_PATH, "utf-8");
  return JSON.parse(data);
};

export const getProductById = (id: number): Product | undefined => {
  const products = getProducts();
  return products.find((product) => product.id === id);
};

import { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "@/utils/products";
import { Product } from "@/types/products";

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  try {
    const products = getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" } as any);
  }
}

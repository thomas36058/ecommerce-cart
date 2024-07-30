"use client"

import Header from "@/components/Header";
import Product from "@/components/Product";
import { useEffect, useState } from "react";

interface ProductType {
  id: number,
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([])

  const fetchProduct = async (): Promise<ProductType[]> => {
    const response = await fetch('https://fakestoreapi.com/products?limit=18');
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    const getData = async () => {
      const products = await fetchProduct();
      setProducts(products);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

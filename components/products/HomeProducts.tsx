"use client";
import { Button, Divider } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import SectionTitle from "../utils/SectionTitle";
export type TProduct = {
  _id: string;
  image: string;
  model: string;
  price: string;
  rating: string;
  lastUpdate: string;
  ownerCountry: string;
  description: string;
};

export default function HomeProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [see, setSee] = useState<number>(6);
  useEffect(() => {
    axios
      .get("products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSeeMore = () => {
    if (products.length < 6) {
      setSee(products.length);
    } else {
      setSee(see + 6);
    }
  };
  return (
    <section className=" py-10">
      <SectionTitle title="Our Products"></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.slice(0, see).map((product) => (
          <SingleProduct key={product?._id} product={product}></SingleProduct>
        ))}
      </div>
      {/* <div className="mt-5 flex justify-center">
        {products.length > see ? (
          <Button
            className="text-primary-color font-semibold"
            onClick={() => handleSeeMore()}
          >
            See More Products
          </Button>
        ) : (
          <Button
            className="text-primary-color font-semibold"
            onClick={() => setSee(6)}
          >
            See Less
          </Button>
        )}
      </div> */}
    </section>
  );
}

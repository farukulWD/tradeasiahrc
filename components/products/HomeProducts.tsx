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
  description: string;
};






export default function HomeProducts() {
  
  const [see, setSee] = useState<number>(6);
  
  const products = [
    {
      _id: "LUB003",
      image: "https://i.ibb.co.com/W4WPN0hG/Model-A101.png",
      price: "$7.99",
      rating: "4.2/5",
      lastUpdate: "2024-03-24",
      model: "Model-A101",
      description:
        "MaxGrip High-Performance Grease is designed to provide maximum protection and lubrication in demanding applications. Its advanced formula ensures superior adhesion and resistance to water washout, making it ideal for use in automotive, marine, and industrial environments."
    },
    {
      _id: "LUB001",
      image: "https://i.ibb.co.com/twQdRmJD/Model-A102.png",
      price: "$9.99",
      rating: "4.5/5",
      lastUpdate: "2024-03-24",
      model: "Model-A102",
      description:
        "UltraGlide Synthetic Lubricant is specially formulated to provide superior lubrication for a wide range of applications. Its advanced synthetic formula ensures long-lasting protection against friction and wear, making it ideal for use in automotive, industrial, and household settings."
    },
    {
      _id: "LUB004",
      image: "https://i.ibb.co.com/yFf1Tbf2/Model-A103.png",
      price: "$9.99",
      rating: "4.5/5",
      lastUpdate: "2024-03-24",
      model: "Model-A103",
      description:
        "UltraGlide Synthetic Lubricant is specially formulated to provide superior lubrication for a wide range of applications. Its advanced synthetic formula ensures long-lasting protection against friction and wear, making it ideal for use in automotive, industrial, and household settings."
    },
    {
      _id: "LUB005",
      image: "https://i.ibb.co.com/JwP1X5nx/Model-A104.png",
      price: "$9.99",
      rating: "4.5/5",
      lastUpdate: "2024-03-24",
      model: "Model-A104",
      description:
        "UltraGlide Synthetic Lubricant is specially formulated to provide superior lubrication for a wide range of applications. Its advanced synthetic formula ensures long-lasting protection against friction and wear, making it ideal for use in automotive, industrial, and household settings."
    },
    {
      _id: "LUB006",
      image: "https://i.ibb.co.com/6R4rPMk0/Model-A105.png",
      price: "$9.99",
      rating: "4.5/5",
      lastUpdate: "2024-03-24",
      model: "Model-A105",
      description:
        "UltraGlide Synthetic Lubricant is specially formulated to provide superior lubrication for a wide range of applications. Its advanced synthetic formula ensures long-lasting protection against friction and wear, making it ideal for use in automotive, industrial, and household settings."
    },
    {
      _id: "LUB007",
      image: "https://i.ibb.co.com/q3BWXg9f/Model-A106.png",
      price: "$9.99",
      rating: "4.5/5",
      lastUpdate: "2024-03-24",
      model: "Model-A106",
      description:
        "UltraGlide Synthetic Lubricant is specially formulated to provide superior lubrication for a wide range of applications. Its advanced synthetic formula ensures long-lasting protection against friction and wear, making it ideal for use in automotive, industrial, and household settings."
    },
    {
      _id: "Model-D101",
      image: "https://i.ibb.co.com/Zpnz46M1/Model-D101.png",
      price: "$9.99",
      rating: "4.5/5",
      lastUpdate: "2024-03-24",
      model: "Model-D101",
      description:
        "UltraGlide Synthetic Lubricant is specially formulated to provide superior lubrication for a wide range of applications. Its advanced synthetic formula ensures long-lasting protection against friction and wear, making it ideal for use in automotive, industrial, and household settings."
    }
  ];
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


import React from "react";
import { TProduct } from "./HomeProducts";


import "@smastrom/react-rating/style.css";
import Image from "next/image";

export default function SingleProduct({ product }: { product: TProduct }) {
  const {
    _id,
    image,
    model,
    price,
    rating,
    lastUpdate,
    ownerCountry,
    description,
  } = product;

  return (


    <div className="relative">
      <Image  height={300} width={1080} src={image} alt={model}  />
      <div className="absolute bottom-[4px] w-full">
        <p className="text-center">{model}</p>
      </div>
    </div>




  );
}

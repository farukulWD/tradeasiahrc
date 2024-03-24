import { Button, Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import { TProduct } from "./HomeProducts";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function SingleProduct({ product }: { product: TProduct }) {
  const {
    _id,
    image,
    name,
    price,
    rating,
    lastUpdate,
    ownerCountry,
    description,
  } = product;

  return (
    <Card
      isBlurred
      className="border-none  dark:bg-default-100/50 "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              src={image}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 ">
            <div className="flex flex-col  gap-1">
              <h3 className="font-semibold text-xl text-foreground/90 ">
                {name}
              </h3>
              <p className="text-small text-foreground/80">
                From {ownerCountry}
              </p>
              <Rating
                style={{ maxWidth: 50 }}
                value={parseFloat(rating)}
                readOnly
              ></Rating>
            </div>
            <div className="flex justify-end mt-auto items-end">
              <Button className="text-primary-color text-lg font-semibold">
                View
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

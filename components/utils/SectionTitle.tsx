import { Divider } from "@nextui-org/react";
import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h3 className="text-3xl text-primary-color font-semibold">{title}</h3>
      <Divider className="my-4 bg-primary-color" />
    </>
  );
}

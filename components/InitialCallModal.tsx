"use client";
import { useDisclosure } from "@nextui-org/react";
import React, { ReactNode, useEffect } from "react";
import CommonModal from "./common/CommonModal";

export default function InitialCallModal({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
    setTimeout(() => {
      onClose();
    }, 10000);
  }, []);
  return (
    <CommonModal
      isOpen={isOpen}
      onOpen={onOpen}
      onOpenChange={onOpenChange}
      title={title}
    >
      {children}
    </CommonModal>
  );
}

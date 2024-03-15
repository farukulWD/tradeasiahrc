import NavigationBar from "@/components/common/NavigationBar";
import React from "react";

export default function products() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="h-[calc(100vh-64px)] flex justify-center items-center">
        <h1 className="text-4xl">Coming soon</h1>
      </div>
    </div>
  );
}

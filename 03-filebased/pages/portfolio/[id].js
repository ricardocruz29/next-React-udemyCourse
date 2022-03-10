import React from "react";
import { useRouter } from "next/router";

export default function PortfolioItemPage() {
  const router = useRouter();
  console.log(router.query); //prints the [id] passed

  return (
    <div>
      <h1>PortfolioItemPage</h1>
    </div>
  );
}

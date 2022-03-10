import React from "react";
import { useRouter } from "next/router";

export default function BlogPosts() {
  const router = useRouter();

  console.log(router.query); //slug can catch any value or multiple values
  return <div>BlogPosts</div>;
}

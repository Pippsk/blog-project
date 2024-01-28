"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>The page you are looking for was not found </h2>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;

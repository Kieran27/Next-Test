import React from "react";
import Link from "next/link";

const Posts = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen min-w-full">
      This Is the posts page!
      <Link href="/"> Back To Home </Link>
    </div>
  );
};

export default Posts;

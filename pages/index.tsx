import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen min-w-full">
      <h1 className="text-center">Welcome to NextJS</h1>
      <Link href="/posts/posts" className="text-center text-blue-300 underline">
        See Posts
      </Link>
      <Image
        width={144}
        height={144}
        objectFit="cover"
        src={"/Images/profile.svg"}
        alt=""
      />
    </div>
  );
};

export default Home;

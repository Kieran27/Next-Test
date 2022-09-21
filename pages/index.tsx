import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Users from "../components/users";
import { useEffect } from "react";
import { FcApproval } from "react-icons/fc";
import { getUsers } from "../lib/getUsers.js";
import { useQuery } from "react-query";
import Head from "next/head";

const Home: NextPage = () => {
  const { isLoading, isError, isSuccess, data } = useQuery("users", getUsers);

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message">Loading...</div>;
    }
    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }
    if (isSuccess) {
      return <Users users={data} />;
    }
    return <></>;
  };
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex items-center flex-col justify-center h-screen min-w-full">
        <div className="mb-3">
          <Image
            className="max-w-full"
            width={160}
            height={160}
            objectFit="cover"
            src={"/Images/profile.svg"}
            alt=""
          />
        </div>
        <div className="mb-2">
          <span className="flex items-center gap-3">
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to NextJS
            </h1>
            <span className="flex items-center text-5xl mt-2">
              <FcApproval />
            </span>
          </span>
          <p className="text-center text-2xl mt-5 mb-1 text-gray-900 tracking-normal">
            Testing The following Stack:
          </p>
          <div>
            <ul className="text-center text-xl text-gray-900">
              <li className="leading-8">NextJS</li>
              <li className="leading-8">Typescript</li>
              <li className="leading-8">React Query</li>
              <li className="leading-8">Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <h3 className="text-gray-900 text-3xl">See Users</h3>
        {renderResult()}
      </div>
    </>
  );
};

export default Home;

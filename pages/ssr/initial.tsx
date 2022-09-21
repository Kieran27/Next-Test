import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/loading";
import { getUsers } from "../../lib/getUsers";

type Props = {
  users: Users[];
};

type Users = {
  address: any;
  company: any;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

const Initial = ({ users }: Props) => {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "users-ssr",
    () => getUsers(),
    { initialData: users }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return "Error";
  }
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex items-center flex-col justify-center h-screen min-w-full">
        {users.map((user: Users) => {
          return <span key={user.id}>{user.name}</span>;
        })}
      </div>
    </>
  );
};

export default Initial;

export async function getStaticProps() {
  const users = await getUsers();
  return {
    props: { users }, // will be passed to the page component as props
  };
}

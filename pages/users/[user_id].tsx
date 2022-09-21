import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUser } from "../../lib/getUser";
import Loading from "../../components/loading";
import UserComponent from "../../components/userComponent";

const User = () => {
  const router = useRouter();
  const { user_id } = router.query;

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["user", user_id],
    () => getUser(user_id)
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return "Error";
  }

  return (
    <div className="flex items-center flex-col justify-center h-screen min-w-full text-5xl">
      {user_id}
      {isSuccess && <UserComponent userData={data} />}
    </div>
  );
};

export default User;

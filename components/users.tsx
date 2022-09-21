import React from "react";
import Link from "next/link";

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

const Users = ({ users }: Props) => {
  return (
    <div className="flex flex-wrap gap-5 mt-5">
      {users.map((user) => {
        return (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className="flex flex-col max-w-xs border items-center px-6 py-3 cursor-pointer transition-colors hover:bg-slate-200">
              <h3 className="text-gray-900 text-3xl">{user.id}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Users;

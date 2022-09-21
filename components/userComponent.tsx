import React from "react";

type Props = {
  userData: Nimious[];
};

type Nimious = {
  address: any;
  company: any;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

const UserComponent = ({ userData }: Props) => {
  console.log(userData);
  return <pre>{JSON.stringify(userData)}</pre>;
};

export default UserComponent;

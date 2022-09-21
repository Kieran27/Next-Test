import axios from "axios";

export const getUser = async (id: string | string[] | undefined) => {
  if (typeof id === "string") {
    const number = parseInt(id);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;
    const user = users.filter((user: any) => user.id === number);
    return user;
  }
  return null;
};

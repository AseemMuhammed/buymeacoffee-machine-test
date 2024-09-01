import { useEffect, useState } from "react";

export const useCreators = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    try {
      const response = await fetch(api);
      const result = await response.json();
      const users = result.results.map((user) => ({
        ...user,
        isActive: Math.random() > 0.5,
      }));
      setData(users);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false);
    }
  }

  console.log(data, "hello  data");
  return { data, isLoading };
};

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { UseProfile } from "./components/UseProfile";

type nameType = {
  username: string;
};

export default function Home() {
  const [name, setName] = useState<nameType[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/users`
    );
    console.log(response.data);

    setName(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        {name.slice(0, 4).map((value) => (
          <UseProfile username={value.username} />
        ))}
      </div>
    </div>
  );
}

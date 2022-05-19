import React from "react";
import { json } from "@remix-run/node";
import getUsers from "~/models/users.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const users = await getUsers();
  return json({ users });
};

export default function Index() {
  const { users } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>System Users</h1>
      <ul>{users && users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
}

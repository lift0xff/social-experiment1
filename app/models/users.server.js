import sql from "./db";

export default async function getUsers() {
  const users = await sql`select * from users`;
  return users;
}

// Create User
import { useRouter } from 'next/router';

export function addUser(req, res) {
  const { query } = useRouter();
  res.send('done');
  return <div>{JSON.stringify(query)}</div>;

  const newUser = req.body;
  try {
    req.send(newUser);
  } catch (error) {
    console.log(error);
  }
}
// Read User
export async function getUser(req, res) {
  const user = await req.body;
  try {
    res.statusCode = 200;
  } catch (error) {
    console.log(error);
  }
}
// Update User
export function updateUser(req, res) {
  const { userId } = req.params;
  users = users.filter((u) => u.userId !== userId);
  //add code to update user from DB
}

// Delete User
export function deleteUser(req, res) {
  const { userId } = req.params;
  users = users.filter((d) => d.userId !== userId);
  //add Code to remove user from DB
}
// GET ALL Users
export function getAllUsers(req, res) {
  try {
    res.statusCode = 200;
    res.json([DataBase]);
  } catch (error) {
    console.log(error);
  }
}

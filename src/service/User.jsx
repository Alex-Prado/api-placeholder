const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const list = await data.json();
  return list;
};

export default Users;

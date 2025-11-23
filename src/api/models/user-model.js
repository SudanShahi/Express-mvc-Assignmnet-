const userItems = [
  {
    user_id: 2523566,
    name: 'Sudan Shahi',
    username: 'sudnas',
    email: 'Sudan.Shahimetropolia.fi',
    role: 'user',
    password: 'Sudan123'
  }
];

const listAllUsers = () => userItems;

const findUserById = (id) => userItems.find(item => item.user_id === id);

const addUser = (user) => {
  const { name, username, email, role, password } = user;
  const newId = (userItems[0]?.user_id || 3609) + 1;
  userItems.unshift({
    user_id: newId,
    name,
    username,
    email,
    role,
    password
  });
  return { user_id: newId };
};

export { listAllUsers, findUserById, addUser };

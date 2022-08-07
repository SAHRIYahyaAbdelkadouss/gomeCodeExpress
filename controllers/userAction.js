const addUser = () => {
  return "addUser functionality";
};

const updateUser = (id) => {
  return "delete User functionality" + id;
};

const deleteUser = (id) => {
  return "delete User with id functionality" + id;
};

const getUsers = () => {
  return "[users]";
};

const getUserById = (id) => {
  return "user with id: " + id;
};

module.exports = { addUser, updateUser, deleteUser, getUsers, getUserById };

import axios from "axios";

axios.defaults.baseURL = "https://6456adef5f9a4f236149e787.mockapi.io";

export const fetchUsers = async (page) => {
  const response = await axios.get(`/users?limit=4&page=${page}`);
  return response.data;
};

const baseUrl = "https://nxt-gen-backend.herokuapp.com/";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};

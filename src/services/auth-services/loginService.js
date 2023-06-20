import { instanceAxios } from '../services.js';

export const loginService = async (email, password) => {  
  return await instanceAxios.post("/api/auth/login", { username: email, password });
};

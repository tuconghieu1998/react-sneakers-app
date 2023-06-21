import {instanceAxios} from "../services.js";

export const signupService = async (email, password, firstName, lastName) =>
  await instanceAxios.post("/api/auth/register", {
    username: email,
    password,
    first_name: firstName,
    last_name: lastName,
  });

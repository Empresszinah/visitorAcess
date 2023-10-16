import axios from 'axios';

console.log(process.env.BASE_URL);

// let baseURL = 'https://new-visistors-access.onrender.com/user/login';

export const LoginUser = async ({ serviceNumber, password }) => {
  let response = await axios.post(
    'https://new-visistors-access.onrender.com/user/login',
    {
      serviceNumber,
      password,
    }
  );
  return response;
};

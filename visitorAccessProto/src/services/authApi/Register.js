import axios from 'axios';

console.log(process.env.BASE_URL);

// let baseURL = 'https://new-visistors-access.onrender.com/user/login';

export const registerUser = async ({
  serviceNumber,
  password,
  name,
  role,
  namePrefix,
}) => {
  let response = await axios.post(
    'https://new-visistors-access.onrender.com/user/register',
    {
      serviceNumber,
      password,
      namePrefix,
      name,
      role,
    }
  );
  console.log(response.data);
};

import axios from 'axios';

const baseURL = 'https://new-visistors-access.onrender.com';

export const GetAllVisitors = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/user/all/visitor`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ReceiveVisitor = async (
  { name, numberOfPeople, visitorToID },
  token
) => {
  try {
    const response = await axios.post(
      `${baseURL}/user/receive/visitor`,
      {
        name,
        numberOfPeople,
        visitorToID,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

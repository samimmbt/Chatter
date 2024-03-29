// mysql -h 91ebb7ebc344429e9ebb97bd5334e317.db.arvandbaas.ir -u base-user -p '#l$OQDXa5PsWRp67U23k2@f9'
import axios from 'axios'

// Define the base URL of your server
const serverUrl = 'http://localhost:3000';

// Function to make a GET request to the '/email' route

async function get(path) {
  try {
    const response = await axios.get(`${serverUrl}${path}`, {
      params: {
        id: inp
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching email data:', error.message);
    return null;
  }
}
export async function getEmailData(inp) {
  try {
    const response = await axios.get(`${serverUrl}/email/${inp}`, {
      params: {
        id: inp
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching email data:', error.message);
    return null;
  }
}

export async function getUserData(userid) {
  try {
    const response = await axios.get(`${serverUrl}/user/${userid}`, {
      params: {
        id: userid
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    return null;
  }
}

// export async function sendUserData(data) {
//   try {
//     axios.post(`${serverUrl}/`, data).then(res => {
//       return res.data
//     })
//   } catch (error) {

//     console.error('Server do not want this user:', error.message);
//     return null;
//   }
// }

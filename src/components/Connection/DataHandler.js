// mysql -h 91ebb7ebc344429e9ebb97bd5334e317.db.arvandbaas.ir -u base-user -p '#l$OQDXa5PsWRp67U23k2@f9'
import axios from 'axios'

// Define the base URL of your server
const serverUrl = 'http://localhost:3000'; 

// Function to make a GET request to the '/email' route
export async function getEmailData(inp) {
  try {
    const response = await axios.get(`${serverUrl}/email/${inp}`,{
        params:{
            id:inp
        }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching email data:', error.message);
    return null;
  }
}

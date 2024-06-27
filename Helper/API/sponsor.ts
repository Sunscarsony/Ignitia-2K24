'use server'
import axios from 'axios';


const fetchSponsorData = async () => {
  try {
    const response = await axios.get(process.env.BACKEND_PATH + '/api/utils/getSponsers/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { fetchSponsorData };

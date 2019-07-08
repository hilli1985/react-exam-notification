const axios = require('axios')
const url = 'http://localhost:8080'

export const getNotifications = async () => {
  try {
    let response = await axios.get(url+'/api/v1/getNotifications')
    return response.data;
  } catch (error) {
    console.error(error)
  }
}
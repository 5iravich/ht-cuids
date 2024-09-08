import axios from 'axios'

//SERVER_ENV
const SERVER_ENV = "http://localhost:8000";

export const post = (path, data, callback) => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: SERVER_ENV + path,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    axios.request(config)
      .then((response) => {
      // console.log(JSON.stringify(response.data));
        callback(response.data) ;
    })
      .catch((error) => {
        console.log("Error occurred while fetching data:",error);
        throw error;
    });
  }

// GET
export const get = async(path) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: SERVER_ENV + path,
      headers: { 
        'Content-Type': 'application/json'
      },
      
    };
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      throw error;
    }
  };
  
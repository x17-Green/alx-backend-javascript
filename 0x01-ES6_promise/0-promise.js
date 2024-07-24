
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const responseData = {
          message: 'Hello from API!',
          data: [1, 2, 3]
        };
        resolve(responseData);
      }, 2000);
    });
  }
  
  export default getResponseFromAPI;
// export default function getResponseFromAPI() {
//     return new Promise((resolve) => resolve);
//   }
// 0-promise.js
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
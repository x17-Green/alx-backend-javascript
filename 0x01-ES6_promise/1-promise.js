function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      body: 'Success',
    });
  }
  return Promise.reject(Error('The fake API is not working currently'));
}

export default getFullResponseFromAPI;

// Second method

// export default function getFullResponseFromAPI(success) {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             resolve({
//                 status: 200,
//                 body: 'Success',
//             });
//         } else {
//             reject(Error('The fake API is not working currently'));
//         }
//     });
// }

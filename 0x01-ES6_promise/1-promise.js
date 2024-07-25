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

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName)
      .then((value) => ({
        status: 'fulfilled',
        value,
      }));

    const photo = await uploadPhoto(fileName)
      .catch((error) => ({
        status: 'rejected',
        value: `${error.name}: ${error.message}`,
      }));
    return [user, photo];
  } catch (error) {
    return [error];
  }
}

export default handleProfileSignup;

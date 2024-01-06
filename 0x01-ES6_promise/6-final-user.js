import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [photo, user] = await Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)]);
    return [
        { status: photo.status, value: photo.value },
        { status: user.status, value: user.value },
    ];
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then(([photo, user]) => {
        return [
            { status: photo.status, value: photo.value },
            { status: user.status, value: user.value }
        ];
    })
}
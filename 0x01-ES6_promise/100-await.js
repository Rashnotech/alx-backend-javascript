import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [photo, user] = await Promise.all([
    uploadPhoto(),
    createUser(),
  ]).catch(() => Promise.reject());

  return {
    photo,
    user,
  };
}

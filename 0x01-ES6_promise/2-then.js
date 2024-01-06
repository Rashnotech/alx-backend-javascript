export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch((error) => { throw new Error(error); })
    .finally(() => { console.log('Got a response from the API'); });
}

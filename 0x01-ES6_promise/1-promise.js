export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      const myObject = {
        status: 200,
        body: 'Success',
      };
      resolve(myObject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise;
}

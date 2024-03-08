export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const isSucess = true;
    if (isSucess) {
      resolve("sucessfull");
    } else {
        reject();
    }
  });
  return promise;
}

const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    if (success) {
      resolve(result);
    } else {
      reject(error);
    }
  });
  
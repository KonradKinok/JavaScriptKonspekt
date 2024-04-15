'use strict';
import * as mainMethods from './functions.mjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// section1 article2
const btn_s1a2 = document.querySelector('button#btn-s1a2');
const optionsNotify = {
  timeout: 4000,
};
btn_s1a2.addEventListener('click', event => {
  const arr = [true, false];
  const promise_s1a2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = mainMethods.getRandomElement(arr);
      if (isSuccess) {
        resolve('Success! Value passed to resolve function');
        Notify.success('Success! Value passed to resolve function', {
          ...optionsNotify,
        });
      } else {
        reject('Error! Error passed to reject function');
        Notify.failure('Error! Error passed to reject function', {
          ...optionsNotify,
        });
      }
    }, 2000);
  });
});

// section1 article3
const arr_s1a3 = [true, false];
const promise_s1a3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isSuccess = mainMethods.getRandomElement(arr_s1a3);
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 6000);
});

const btn_s1a3 = document.querySelector('button#btn-s1a3');
btn_s1a3.addEventListener('click', event => {
  // Will run first
  Notify.info('Before promise.then()', {
    ...optionsNotify,
  });
  // Registering promise callbacks
  promise_s1a3.then(
    // onResolve will run third or not at all
    value => {
      Notify.success(value, {
        ...optionsNotify,
      });
    },
    // onReject will run third or not at all
    error => {
      console.log('onReject call inside promise.then()');
      Notify.failure(error, {
        ...optionsNotify,
      });
    }
  );
  // Will run second
  Notify.info('After promise.then()', {
    ...optionsNotify,
  });
});

// section1 article4
const btn_s1a4 = document.querySelector('button#btn-s1a4');
const arr_s1a4 = [true, false];
const promise_s1a4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isSuccess = mainMethods.getRandomElement(arr_s1a4);
    if (isSuccess) {
      resolve('S1A4: Success! Value passed to resolve function');
    } else {
      reject('S1A4: Error! Error passed to reject function');
    }
  }, 6000);
});

btn_s1a4.addEventListener('click', event => {
  promise_s1a4
    .then(value => {
      Notify.success(value, {
        ...optionsNotify,
      });
    })
    .catch(error => {
      Notify.failure(error, {
        ...optionsNotify,
      });
    });
});

// section1 article5
const btn_s1a5 = document.querySelector('button#btn-s1a5');
const arr_s1a5 = [true, false];
const promise_s1a5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isSuccess = mainMethods.getRandomElement(arr_s1a5);
    if (isSuccess) {
      resolve('S1A5: Success! Value passed to resolve function');
    } else {
      reject('S1A5: Error! Error passed to reject function');
    }
  }, 6000);
});
btn_s1a5.addEventListener('click', event => {
  promise_s1a5
    .then(value => {
      Notify.success(value, {
        ...optionsNotify,
      });
    })
    .catch(error => {
      Notify.failure(error, {
        ...optionsNotify,
      });
    })
    .finally(() =>
      Notify.info('S1A5: Promise settled', {
        ...optionsNotify,
      })
    );
});

// section1 article6
const btn_s1a6 = document.querySelector('button#btn-s1a6');
const arr_s1a6 = [true, false];
const promise_s1a6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isSuccess = mainMethods.getRandomElement(arr_s1a6);
    if (isSuccess) {
      resolve(5);
    } else {
      reject(0);
    }
  }, 6000);
});
btn_s1a6.addEventListener('click', event => {
  promise_s1a6
    .then(value => {
      Notify.success(value.toString(), {
        ...optionsNotify,
      });
      return value * 2;
    })
    .then(value => {
      Notify.success(value.toString(), {
        ...optionsNotify,
      });
      return value * 3;
    })
    .then(value => {
      Notify.success(value.toString(), {
        ...optionsNotify,
      });
    })
    .catch(error => {
      Notify.failure(error.toString(), {
        ...optionsNotify,
      });
    })
    .finally(() => {
      Notify.info('S1A5: Promise settled', {
        ...optionsNotify,
      });
    });
});

// section1 article7
const btn_s1a7 = document.querySelector('button#btn-s1a7');
const arr_s1a7 = [true, false];
const fetchUserFromServer = (username, onSuccess, onError) => {
  Notify.info(`Fetching data for ${username}`, {
    ...optionsNotify,
  });
  console.log(`Fetching data for ${username}`);
  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    let isSuccess = mainMethods.getRandomElement(arr_s1a7);
    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

const onFetchSuccess = user => {
  Notify.success(`S1A7: ${user}`, {
    ...optionsNotify,
  });
};

const onFetchError = error => {
  Notify.failure(`S1A7: ${error}`, {
    ...optionsNotify,
  });
};

btn_s1a7.addEventListener('click', event => {
  fetchUserFromServer('Mango', onFetchSuccess, onFetchError);
});

// section1 article8
const btn_s1a8 = document.querySelector('button#btn-s1a8');
const arr_s1a8 = [true, false];
const fetchUserFromServer_s1a8 = username => {
  return new Promise((resolve, reject) => {
    Notify.info(`Fetching data for ${username}`, {
      ...optionsNotify,
    });

    setTimeout(() => {
      let isSuccess = mainMethods.getRandomElement(arr_s1a8);
      if (isSuccess) {
        resolve('success value');
      } else {
        reject('error');
      }
    }, 2000);
  });
};

btn_s1a8.addEventListener('click', event => {
  fetchUserFromServer_s1a8('Mango')
    .then(user =>
      Notify.success(`S1A8: ${user}`, {
        ...optionsNotify,
      })
    )
    .catch(error =>
      Notify.failure(`S1A8: ${error}`, {
        ...optionsNotify,
      })
    );
});

// section2 article2
const btn_s2a2 = document.querySelector('button#btn-s2a2');
const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

btn_s2a2.addEventListener('click', () => {
  Promise.all([promiseA, promiseB])
    .then(
      value => (
        Notify.success(`S2A2: ${value}`, {
          ...optionsNotify,
        }),
        console.log(value)
      )
    ) //["promiseA value", "promiseB value"]
    .catch(error => console.log(error));
});

// section2 article3
const btn_s2a3 = document.querySelector('button#btn-s2a3');

const makePromise_s2a3 = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA_s2a3 = makePromise_s2a3('S2A3: promiseA value', 1000);
const promiseB_s2a3 = makePromise_s2a3('S2A3: promiseB value', 3000);

Promise.race([promiseA_s2a3, promiseB_s2a3])
  .then(value => console.log(value)) // "promiseA value"
  .catch(error => console.log(error));

btn_s2a3.addEventListener('click', () => {
  Promise.race([promiseA, promiseB])
    .then(
      value => (
        Notify.success(`S2A2: ${value}`, {
          ...optionsNotify,
        }),
        console.log(value)
      )
    ) // "promiseA value"
    .catch(error => console.log(error));
});

// section2 article4
const btn_s2a4 = document.querySelector('button#btn-s2a4');
// Fulfilled promise

btn_s2a4.addEventListener('click', () => {
  new Promise(resolve => resolve('S2A4: success value')).then(value =>
    console.log(value)
  );
  Promise.resolve('S2A4: success value').then(value => console.log(value));

  // Rejected promise
  new Promise((resolve, reject) => reject('S2A4: error')).catch(error =>
    console.error(error)
  );

  Promise.reject('S2A4: error').catch(error => console.error(error));
});

// section2 article4a
const input_s2a4a = document.querySelector('input#input-s2a4');
const btn_s2a4a = document.querySelector('button#btn-s2a4a');

const makeGreeting = guestName => {
  if (guestName === '' || guestName === undefined) {
    return {
      success: false,
      message: 'Guest name must not be empty',
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const username = input_s2a4a.value;
const result = makeGreeting(username);

btn_s2a4a.addEventListener('click', () => {
  if (result.success) {
    Notify.success(`S2A4a: ${result.message}`, {
      ...optionsNotify,
    });
  } else {
    Notify.failure(`S2A4a: ${result.message}`, {
      ...optionsNotify,
    });
  }
});

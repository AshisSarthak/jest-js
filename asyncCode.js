function loadUser() {
  fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function addAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
}

function returnPromise() {
  return new Promise(
    (resolve) => {
      resolve("resolved");
    },
    (reject) => {
      reject("rejected");
    }
  );
}

module.exports = {
  loadUser,
  addAsync,
  returnPromise,
};

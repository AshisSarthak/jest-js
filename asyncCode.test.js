const asyncCall = require("./asyncCode");

test("the data is fetched- callback", (done) => {
  asyncCall.addAsync(10, 5, (result) => {
    expect(result).toBe(15);
    done();
  });
});

test("testing Promises", () => {
  return asyncCall.returnPromise().then((data) => {
    expect(data).toBe("resolved");
  });
});

test("testing Promise resolves", () => {
  return expect(asyncCall.returnPromise()).resolves.toBe("resolved");
});

test("testing Promise rejects", () => {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject("rejected"), 1000);
  });
  return expect(promise).rejects.toBe("rejected");
});

test("testing async await", async () => {
  let promise = await asyncCall.returnPromise();
  expect(promise).toBe("resolved");
});

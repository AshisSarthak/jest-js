const testReturnObj = require("./assertions");

test("tests the returned object not to be null", () => {
  expect(testReturnObj.returnObj()).not.toBeNull();
});

test("tests the returned object", () => {
  const val = testReturnObj.returnObj();
  expect(val).toBeTruthy();
  expect(val).not.toBeUndefined();
});

test("test object keys and values", () => {
  const val = testReturnObj.returnObj();
  expect(val.a).toBe(10);
  expect(val.city).toBe("Hydbd");

  const keys = Object.keys(val);
  expect(keys.length).toBe(3);
  expect(keys).toContain("name");
  expect(new Set(keys)).toContain("city");
});

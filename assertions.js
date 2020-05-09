const returnObject = () => ({
  a: 10,
  name: "IamObject",
  city: "Hydbd",
});

const returnObjectArray = () => [
  {
    a: 10,
    name: "IamObject",
    city: "Hydbd",
  },
  {
    a: 111,
    name: "IamObject1",
    city: "Hydbd1",
  },
];

module.exports = {
  returnObj: returnObject,
  returnObA: returnObjectArray,
};

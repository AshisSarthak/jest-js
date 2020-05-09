function addCounter() {
  let existingValue = document.getElementById("counter").textContent;
  existingValue = +existingValue + 1;
  document.getElementById("counter").textContent = existingValue;
}

module.exports = {
  addCounter,
};

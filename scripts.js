function changetext() {
  let min = 1;
  let max = 20;
  let textx = "Text number ";
  document.getElementById("textchange1").innerHTML =
    textx + getRandomIntNumber(min, max);
  document.getElementById("textchange2").innerHTML =
    textx + getRandomIntNumber(min, max);
}

function getRandomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLength (string, length) {
  return string.length <= length;
}

getRandomIntInclusive(0, 1);
checkStringLength('', 140);



function ceasarCipher(string, shift) {
  let charArray = [];
  let shiftedArray = [];
  let cipheredArray = [];

  for (let i = 0; i < string.length; i++) {
    charArray.push(string.charCodeAt(i));
  }

  charArray.forEach((element) => {
    if (element >= 97 && element <= 122) {
      if (element + shift > 122) {
        let wrappedElement = element + shift - 122 + 97 - 1;
        shiftedArray.push(wrappedElement);
      }
    }

    if (element >= 65 && element <= 90) {
      if (element + shift > 90) {
        let wrappedElement = element + shift - 90 + 65 - 1;
        shiftedArray.push(wrappedElement);
      }
    }

    shiftedArray.push((element += shift));
  });

  for (let i = 0; i < charArray.length; i++) {
    cipheredArray.push(String.fromCharCode(shiftedArray[i]));
  }

  return cipheredArray.join("");
}

module.exports = ceasarCipher;

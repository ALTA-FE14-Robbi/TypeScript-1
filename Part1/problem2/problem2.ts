export const decryptAtbash = (cipherText: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let plainText = "";
  for (let i = 0; i < cipherText.length; i++) {
    const char = cipherText[i];
    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) {
      // the character is not a letter, ignore it
    } else {
      const reverseIndex = alphabet.length - index - 1;
      const reverseChar = alphabet[reverseIndex];
      plainText += (char === char.toUpperCase()) ? reverseChar.toUpperCase() : reverseChar;
    }
  }
  return plainText.replace(/\s+/g, "");
};


// console.log(decryptAtbash("Olivn rkhfn wloli hrg znvg"));
// Loremipsumdolorsitamet
function cipher(word, shift) {
    if (shift === 0) return word;
  
    return word.replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
    );
}

  module.exports = cipher;
function count_vowels() {
  const input = Host.inputString();  
  Host.outputString(JSON.stringify({original: input}));
}

module.exports = { count_vowels } 
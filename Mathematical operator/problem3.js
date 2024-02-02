function isConsonant(char) {
    char = char.toLowerCase(); 
  
    const isLetter = /^[a-z]$/i.test(char); 
  
    const result = (isLetter && !'aeiou'.includes(char))
      ? "Consonant"
      : "Not a Consonant";
  
    console.log(result);
  }
  
  
  isConsonant('A'); 
  isConsonant('b'); 
  isConsonant('5'); 
  
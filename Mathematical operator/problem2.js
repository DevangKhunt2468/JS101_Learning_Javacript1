function isVowel(char) {
    char = char.toLowerCase(); 
  
    const result = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
      ? "Vowel"
      : "Not a Vowel";
  
    console.log(result);
  }
  
  
  isVowel('A'); 
  isVowel('b'); 
  isVowel('e'); 
  
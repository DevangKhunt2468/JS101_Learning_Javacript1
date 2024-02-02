function printAgeCategory(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;
  
    const result = (age >= 13 && age <= 19)
      ? "Teenage"
      : (age >= 20 && age <= 29)
      ? "Twenties"
      : "Age category not specified";
  
    console.log(result);
  }
  
  
  printAgeCategory(2005); 
  printAgeCategory(1995); 
  printAgeCategory(1990); 
  
const shortDay = "Mon"; // Replace with the short day you want to convert

const longDay = 
  shortDay === "Sun" ? "Sunday" :
  shortDay === "Mon" ? "Monday" :
  shortDay === "Tues" ? "Tuesday" :
  shortDay === "Wed" ? "Wednesday" :
  shortDay === "Thurs" ? "Thursday" :
  shortDay === "Fri" ? "Friday" :
  shortDay === "Satu" ? "Saturday" :
  "Invalid short day";

console.log(`The long format for "${shortDay}" is "${longDay}"`);


var student ={

    name:"Parth Dave",
  school:"Sanskar International School",
  grade:10,
  section:"A",
  roll_number:16033,
  // marks scored in three subjects out of 100 marks:
  // english, maths , science.
     marks :{
             maths: 90,
             english: 92,
             science : 85
  }
  }
  // print the report card
  console.log("****************************************");
  console.log("           STUDENT REPORT CARD");
  console.log("****************************************");
  console.log("Name: " + student.name);
  console.log("School: " + student.school);
  console.log("Grade: " + student.grade);
  console.log("Section: " + student.section);
  console.log("Roll Number: " + student.roll_number);
  console.log("****************************************");
  // console.log(name);
  // console.log(school);
  // console.log(grade);
  // console.log(section);
  // console.log(roll_number);
  // console.log(maths);
  // console.log(english);
  // console.log(science);
  console.log("maths: " + student.marks.maths);
  console.log("english: " + student.marks.english);
  console.log("science: " + student.marks.science);
  console.log("****************************************");
  
  
  
//Justin Henry 10-7-2013

//Calculating student grade average with average of Tests, Quizzes, and Assignments having different weight

var testWeight = 50; //Declaration and definition of the percentage of weight for tests
var quizWeight = 30; //Declaration and definition of the percentage of weight for quizzes
var assignWeight = 20; //Declaration and definition of the percentage of weight for assignments

var assignGrade1 = prompt("Enter student's first assignment grade", ""); //Prompt for user to enter a value for student's first assignment grade
var assignGrade2 = prompt("Enter student's second assignment grade", ""); //Prompt for user to enter a value for student's second assignment grade
var quizGrade = prompt("Enter student's quiz grade", ""); //Prompt for user to enter a value for student's quiz grade
var testGrade = prompt("Enter student's test grade", ""); //Prompt for user to enter a value for student's test grade

var assignArray = [assignGrade1, assignGrade2]; //Declaration and definition of array containing assignment grades
var assignAvg = (parseInt(assignArray[0]) + parseInt(assignArray[1]))/2; //Declaration, definition, and formula for calculating the average of student's assignment grades

var assignFinal = assignWeight * (assignAvg/100); //Declaration, definition, and formula for calculating the assignment grade with weight
var quizFinal = quizWeight * (quizGrade/100); //Declaration, definition, and formula for calculating the quiz grade with weight
var testFinal = testWeight * (testGrade/100); //Declaration, definition, and formula for calculating the test grade with weight
var finalAvg = assignFinal + quizFinal + testFinal; //Declaration, definition, and formula for calculating student's grade

document.write("Assignments have a weight of " + assignWeight + "%, quizzes have a weight of " + quizWeight + "%, and tests have a weight of " + testWeight + "%. Based on this and the grades you entered, your student's total class grade is " + finalAvg + "." + "<BR>" + "<BR>");
//Summary of information entered and calculated displayed in browser
console.log("Assignments have a weight of " + assignWeight + "%, quizzes have a weight of " + quizWeight + "%, and tests have a weight of " + testWeight + "%. Based on this and the grades you entered, your student's total class grade is " + finalAvg + "." + "<BR>" + "<BR>");
//Summary of information entered and calculated displayed in console

var gradeArray = [assignArray, quizGrade, testGrade, finalAvg]; //Declaration and definition of array containing all grades

document.write("Assignment Grade 1: " + assignArray[0] + "<BR>"); //Display of assignment grade 1
document.write("Assignment Grade 2: " + assignArray[0] + "<BR>"); //Display of assignment grade 2
document.write("Quiz Grade : " + gradeArray[1] + "<BR>"); //Display of quiz grade
document.write("Test Grade : " + gradeArray[2] + "<BR>"); //Display of test grade
document.write("Class Grade : " + gradeArray[3] + "<BR>"); //Display of class grade
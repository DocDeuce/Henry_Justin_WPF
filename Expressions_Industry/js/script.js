//Calculating student grade average with average of Tests, Quizzes, and Assignments having different weight
var testWeight = 50;
var quizWeight = 30;
var assignWeight = 20;

var assignGrade1 = prompt("Enter student's first assignment grade", "");
var assignGrade2 = prompt("Enter student's second assignment grade", "");
var quizGrade = prompt("Enter student's quiz grade", "");
var testGrade = prompt("Enter student's test grade", "");

var assignAvg = (parseInt(assignGrade1) + parseInt(assignGrade2))/2;

var assignFinal = assignWeight * (assignAvg/100);
var quizFinal = quizWeight * (quizGrade/100);
var testFinal = testWeight * (testGrade/100);
var finalAvg = assignFinal + quizFinal + testFinal;

var gradeArray = [["Assignment Grade 1", assignGrade1],["Assignment Grade 2", assignGrade2],["Quiz Grade", quizGrade],["Test Grade", testGrade],["Class Grade", finalAvg]];

document.write(gradeArray);
document.write("Assignments have a weight of " + assignWeight + "%, quizzes have a weight of " + quizWeight + "%, and tests have a weight of " + testWeight + "%. Based on this and the grades you entered, your student's total class grade is " + finalAvg + ".");

/*
    [0][0] = "Assignment Grade 1";
    [1][0] = "Assignment Grade 2";
    [2][0] = "Quiz Grade";
    [3][0] = "Test Grade";
    [4][0] = "Class Grade";

    [0][1] = assignGrade1;
    [1][1] = assignGrade2;
    [2][1] = quizGrade;
    [3][1] = testGrade;
    [4][1] = finalAvg;
*/
function studentGradeGeneraator(gradeMarks){
    if (gradeMarks>79) {return "A"}
    else if (gradeMarks>=60 && gradeMarks<=79){return "B"}
    else if (gradeMarks>=49 && gradeMarks<=59) {return "C"} 
    else if (gradeMarks>=40 && gradeMarks<=49) {return "D"}
    else if (gradeMarks<40) {return "E"}
//"&&" enables us to have a range of marks to work with for each grade 
}
console.log (studentGradeGeneraator(68))
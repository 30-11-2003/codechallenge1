Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

Steps
1.write a function with gradeMarks as its parameter
2. if (gradeMarks>79) {return "A"}
    else if (gradeMarks>=60 ,<=79) {return "B"}
    else if (gradeMarks>=49 ,<=59) {return "C"}
    else if (gradeMarks>=40 ,<=49) {return "D"}
    else if (gradeMarks>40) {return "E"}s
3. call the function 

Challenge 2: Speed Detector (Toy Problem) 

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

Steps
1.write a function with one parameter called speed
2. if (speed<70) {return "okay"} else
    if (points>12) {return"license suspended"}
    else {
        let points= Math.ceil((speed-70)/5)
         if (points>12) {
        return "Your license is suspended"
    } else {
        return points
    }

}
console.log (speedDetector(150));

    Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

Steps
1. write a function with the basicSalary as a parameter
2. if (basicSalary <=288,000 ) {
    payee=10;
} else if (basicSalary<=388,000 && basicSalary>=288,001 ){
    payee=25;
} else if (basicSalary<=6,000,000 && basicSalary>=388,001){
    payee=30;
} else if (basicSalary<=9,600,000 && basicSalary>=6,000,000){
    payee=32.5;
} else if (basicSalary >9,600,000){
    payee = 35;
}

function calculatePayee (grossSalary){
    let payee=0;
    if (grossSalary<=288000 ) {
        payee=10;
        //10% Taxrate 
    } else if (grossSalary<=388000 && grossSalary>=288001 ){
        payee=25;
        //25% Taxrate
    } else if (grossSalary<=6000000 && grossSalary>=388001){
        payee=30;
        //30% Taxrate
    } else if (grossSalary<=9600000 && grossSalary>=6000000){
        payee=32.5;
        //32.5% Taxrate
    } else if (grossSalary >9600000){
        payee = 35;
       // 35% Taxrate
    }
    //&& helps to give a range to work with
}
console.log (calculatePayee(78565))

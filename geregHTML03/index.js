

//function brojevi(broj, broj2){
//    broj=Number(prompt(`unesi prvi broj`))
//   broj2=Number(prompt(`unesi drugi broj`))
//   zbir=broj+broj2
//   console.log(`Zbir dva broja je ${zbir}`)
//}
//brojevi()
num1="e"
num2="C"
while(isNaN(num1)){
    num1 = Number(prompt("Napiši prvi broj"))
}
while(isNaN(num2)){
    num2 = Number(prompt("Napiši drugi broj"))
}

operator = prompt("Napiši jedan od operatora i to: +, -, * ili /")
function chkOperator(){
    switch(operator){
        case "*":
            text1="Proizvod"
            result=num1*num2
            break;
        case "/":
            text1="Količnik"
            result=num1/num2
            break;
        case "+":
            text1="Zbir"
            result=num1+num2
            break;
        case "-":
            text1="Razlika"
            result=num1-num2
            break;
        default:
            operator = prompt("LEPO TI PIŠE da napišeš jedan od operatora i to: +, -, * ili /") 
            chkOperator()
    }
}
chkOperator()
alert(`${text1} ovih brojeva je ${result}.`)

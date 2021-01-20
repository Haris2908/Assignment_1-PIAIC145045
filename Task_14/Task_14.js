var a = 2 , b = 1

var Step1 = --a 

document.write(`The value of step --a is : ${Step1} <br><br>`)

var Step2 = Step1 - --b

document.write(`The value of step --a - --b is : ${Step2} <br><br>`)

var Step3 = Step2 + ++b

document.write(`The value of step --a - --b + ++b is ${Step3} <br><br>`)

var Result = --a - --b + ++b - b--

document.write(`a is : ${a} <br> b is : ${b} <br> Result is : ${Result}`)



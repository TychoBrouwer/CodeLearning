let calculation = '';
let currentNumber = '';

const calcMainButtons = document.querySelectorAll('.calcNumberButtons')
const operatorButtons = document.querySelectorAll('.operatorButtons')

calcMainButtons.forEach(element => {
  element.addEventListener("click", function() {
    if (element.getAttribute('dataNumber') !== '.') {
      currentNumber += element.getAttribute('dataNumber')

      console.log(currentNumber)
      console.log(calculation)
    } else if (!currentNumber.includes('.')) {
      currentNumber += element.getAttribute('dataNumber')

      console.log(currentNumber)
      console.log(calculation)
    }

    printCalculation()
  })
})

operatorButtons.forEach(element => {
  console.log(element)

  element.addEventListener("click", function() {
    const operator = element.getAttribute('dataOperator')

    if (operator === 'delete') {
      if (currentNumber !== '') {
        currentNumber = currentNumber.slice(0, -1)
      } else {
        calculation = calculation.slice(0, -1)
      }
    } else if (operator === 'cancel') {
      currentNumber = '';
      calculation = '';
    } else if (operator === 'ans') {

    } else if (operator === '=') {

    } else {
      calculation += currentNumber + operator
      currentNumber = ''
    }
    
    console.log(currentNumber)
    console.log(calculation)

    printCalculation()
  })
})


function printCalculation() {
  console.log(currentNumber)
  console.log(document.getElementById('currentNumber'))

  document.getElementById('currentNumber').innerHTML = currentNumber;
}
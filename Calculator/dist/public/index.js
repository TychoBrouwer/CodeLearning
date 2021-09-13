let calculation = ''
let currentNumber = ''
let lastOperator = ''
let numbers = []
let operators = []
let calculations = []
let savedAnswers = []

const calcMainButtons = document.querySelectorAll('.calcNumberButtons')
const operatorButtons = document.querySelectorAll('.operatorButtons')

calcMainButtons.forEach(element => {
  element.addEventListener("click", function() {
    if (element.getAttribute('dataNumber') !== '.' || !numbers[numbers.length - 1].includes('.')) {
      if (typeof numbers[0] === 'undefined') {
        numbers[0] = element.getAttribute('dataNumber')

        printAnswer('')
      } else {
        numbers[numbers.length - 1] += element.getAttribute('dataNumber')
      }
      calculation += element.getAttribute('dataNumber')
    }

    printCalculation(buildCalc()[1])
  })
})

operatorButtons.forEach(element => {
  element.addEventListener("click", function() {
    const operator = element.getAttribute('dataOperator')

    if (operator === 'delete') {
      if (numbers[numbers.length - 1] === '' && (!Number(calculation.slice(-1)) && calculation.slice(-1) !== '.') || (numbers.length === 1 && numbers[numbers.length - 1].length === 1)) {
        numbers.pop()
        operators.pop()
      } else if (calculation !== '') {
        numbers[numbers.length - 1] = numbers[numbers.length - 1].slice(0, -1)
      }

      calculation = calculation.slice(0, -1)
    } else if (operator === 'ans') {

    } else if (numbers[numbers.length - 1] !== '' || operator === '(' || lastOperator === ')') {
      if (operator !== '=' && (calculation !== '' || operator === '(')) {
        calculation += operator
        operators.push(operator)
      }

      numbers[numbers.length] = ''

      lastOperator = operator

      if (lastOperator === '(' && calculation === '(') {
        numbers[numbers.length] = ''
      }
    }

    if (operator === '=') {
      const calc = buildCalc()
      const eval = evil(calc[0])

      printAnswer(eval, calc[1])
      savedAnswers.push([calc, eval])

      console.log(savedAnswers)

      numbers = []
      operators = []
      calculation = ''
    } else if (operator === 'cancel') {
      numbers = []
      operators = []
      calculation = ''

      printAnswer('')
    }
    
    if (calculation !== '' || operator === 'cancel' || (operator === 'delete' && lastOperator !== '=')) {
      printCalculation(buildCalc()[1])
    }
  })
})

function buildCalc() {
  let calc = ''
  let prevOperator = ''
  
  for (let i = 0; i < operators.length + 1; i++) {
    if (typeof numbers[i] !== 'undefined') {
      calc += numbers[i]
    }

    if (typeof operators[i] !== 'undefined') {
      calc += operators[i]
    }

    prevOperator = operators[i]
  }

  calc = calc.replaceAll(/[\(]([^\)]+?)[\/]/g, '\($1\)\/')

  calc = calc.replaceAll(/(.[\)])[\(]/gm, '$1*\(')
  calc = calc.replaceAll(/([\d])[\(]/gm, '$1*\(')
  calc = calc.replaceAll(/[\)]([\d])/gm, '\)*$1')

  let calcF = calc.replaceAll(/\((.+?)\)\/\(/g, '\{$1\}\\over\(')
  calcF = calcF.replaceAll(/(}\\over)\((.+?)\)/g, '\\over$2\}')

  if (calcF.match(/(}\\over)\((.+?)\)/g)) {
    calcF = calcF.replaceAll(/(}\\over)\((.+?)\)/g, '\\over$2\}')
  } else if (calcF.match(/(}\\over)[\(](.*)/g)) {
    calcF = calcF.replaceAll(/(}\\over)[\(](.*)/g, '\\over($2\}')
  }

  return [calc, calcF]
}

function evil(fn) {
  try {
    return new Function('return ' + fn)();
  } catch {
    fn = fn + ')'
    operators.push(')')

    return new Function('return ' + fn)();
  }
}

function printCalculation(calc) {
  document.getElementById('calculation').innerHTML = '\\$' + calc + '\\$'

  MathJax.typeset()
}

function printAnswer(answer, calc) {
  document.getElementById('currentNumber').innerHTML = '\\$' + answer + '\\$'
  document.getElementById('calculation').innerHTML = '\\$' + calc + '\\$'

  MathJax.typeset()
}
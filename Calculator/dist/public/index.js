let calculation;
let currentNumber = '';

const calcMainButtons = document.querySelectorAll('.calcNumberButtons')

calcMainButtons.forEach(element => {
  console.log(element)

  element.addEventListener("click", function() {
    if (element.getAttribute('dataNumber') !== '.') {
      currentNumber += element.getAttribute('dataNumber')

      console.log(currentNumber)
    } else if (!currentNumber.includes('.')) {
      currentNumber += element.getAttribute('dataNumber')

      console.log(currentNumber)
    }
  })
})

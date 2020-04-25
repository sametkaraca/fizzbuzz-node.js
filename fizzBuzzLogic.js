const myArray =[]
let i=1

let fizzBuzz = () => {
  
  let  inputValue = myArray.push(i)

  i++

      if (inputValue % 3 === 0 && inputValue % 5 === 0) {
        myArray.pop()
        myArray.push('FizzBuzz')
    }

    else if (inputValue % 3 === 0) {
        myArray.pop()
        myArray.push('Fizz')
    } 
    
    else if (inputValue % 5 === 0) {
         myArray.pop()
         myArray.push('Buzz')
    } 

    else {
        textValue='Guess Another'
    }
  
  console.log(myArray)

}
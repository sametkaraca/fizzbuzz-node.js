const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const ejs = require('ejs')
const app = express()

let textValue = ''

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render((__dirname + '/public/index'), {textValue});
});

app.post('/',(req,res)=>{

    const inputValue = req.body.numberInput

    if (inputValue % 3 === 0 && inputValue % 5 === 0) {
        textValue='FizzBuzz'
    }

    else if (inputValue % 3 === 0) {
        textValue='Fizz'
    } 
    
    else if (inputValue % 5 === 0) {
        textValue='Buzz'
    } 

    else {
        textValue='Guess Another'
    }

    res.redirect('/')
    
})

app.listen(port, ()=>console.log('You app is working on ' + port))
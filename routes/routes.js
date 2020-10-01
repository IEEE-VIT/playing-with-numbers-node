const router = require('express')()

router.post('/factorial', (req, res) => {
  //Factorial logic goes here
  let number = parseInt(req.body.number)
  let fact = 1

  for (let i = 1; i <= number; i++) {
    fact = fact * i
  }

  res.status(200).send({ result: fact })
})

router.post('/palindrome', (req, res) => {
  //Palindrome logic goes here
})

router.post('/neon', (req, res) => {
  //Neon Number
  try {
    const number = req.body.number
    let squaredNumber = number * number
    let sumOfDigits = 0
    while (squaredNumber) {
      sumOfDigits += squaredNumber % 10
      squaredNumber = Math.floor(squaredNumber / 10)
    }
    if (sumOfDigits === number) {
      res.status(200).send({ message: 'The Number is Neon Number' })
    } else {
      res.status(200).send({ message: 'The Number is Not Neon Number' })
    }
  } catch (error) {
    res.send({ Error: error }).status(500)
  }
})

router.post('/dudeney', (req, res) => {
  //Dudeney Number
  try {
    let number = req.body.number
    let sumOfDigits
    const root = Math.cbrt(number)

    while (number) {
      sumOfDigits += number % 10
      number = Math.floor(number / 10)
    }
    if (sumOfDigits == root) {
      res.status(200).send({ message: 'The Number is Dudeney Number' })
    } else {
      res.status(200).send({ message: 'The Number is Not Dudeney Number' })
    }
  } catch (error) {
    res.send({ Error: error }).status(500)
  }
})

router.post('/magic', (req, res) => {
  //taking the input from the body
  try {
    const number = req.body.number
    var n = number

    var sum = 0

    while (n > 0 || sum > 9) {
      if (n == 0) {
        n = sum
        sum = 0
      }
      sum += n % 10
      n = parseInt(n / 10)
    }

    if (sum == 1) {
      res.status(200).send({ message: `${number} is a Magic number` })
    } else {
      res.status(200).send({ message: `${number} is not a Magic number` })
    }
  } catch (error) {
    res.status(500).send({ Error: error })
  }
})

module.exports = router

const router = require('express')()

router.post('/factorial', (req, res) => {
  //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
  //Palindrome logic goes here
})

router.post('/magic', (req, res) => {
  //taking the input from the body
  const number = req.body.number

  if (number % 9 == 1) {
    return res.send(`${number} is a Magic number`)
  } else {
    return res.send(`${number} is not a Magic number`)
  }
})

module.exports = router

const router = require('express')();

router.post('/factorial', (req, res, next) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res, next) => {
    //Palindrome logic goes here
})

router.post('/dudeney', (req, res, next) => {
    //Dudeney Number
    try {
        let number = req.body.number
        let sumOfDigits
        const root = Math.cbrt(number)

        while (number) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }
        if (sumOfDigits == root) {
            res.send({ message: "The Number is Dudeney Number" }).status(200)
        } else {
            res.send({ message: "The Number is Not Dudeney Number" }).status(200)
        }
    } catch (error) {
        res.send({ Error: error }).status(500)
    }

})

module.exports = router;
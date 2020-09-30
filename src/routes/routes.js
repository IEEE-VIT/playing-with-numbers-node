const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

router.post('/dudeney', (req, res) => {
    //Dudeney Number
    try {
        let number = req.body.number
        let sumOfDigits = 0
        const root = Math.cbrt(number)

        while (number) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }
        if (sumOfDigits == root) {
            res.status(200).send({ message: "The Number is Dudeney Number" })
        } else {
            res.status(200).send({ message: "The Number is Not Dudeney Number" })
        }
    } catch (error) {
        res.send({ Error: error }).status(500)
    }

})

module.exports = router;

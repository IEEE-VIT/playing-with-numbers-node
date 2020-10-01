const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

router.post('/armstrong', (req, res) => {
    let number = req.body
    let numberOfDigits = number.length;
    let sum = 0;

    let temp = number;

    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder**numberOfDigits;

        temp = parseInt(temp / 10);
    }

    if (sum == number) {
        res.send({ message: "The Number is an Armstrong Number" }).status(200)
    }
    else {
        res.send({ message: "The Number is not an Armstrong Number" }).status(200)
    }
})

module.exports = router;
const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

router.post('/amicable', (req, res) => {
    //Amicable logic goes here
    try {

        const x = req.body.x
        const y = req.body.y
        let sumx
        let sumy
        for (i = 1; i < x; i++) {
            if (x % i == 0)
                sumx += i
        }
        for (i = 1; i < y; i++) {
            if (y % i == 0)
                sumy += i
        }

        if (sumx == y && sumy == x) {
            res.send({ message: "The Number is Amicable Number" }).status(200)
        } else {
            res.send({ message: "The Number is Not Amicable Number" }).status(200)
        }

    } catch (error) {
        res.send({ Error: error }).status(500)
    }
})

module.exports = router;
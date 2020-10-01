const router = require('express')();

router.post('/factorial', (req, res) => {
    //Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

//checking Neon Number
router.post('/neon', (req, res) => {
    try {
        let num = Number.parseInt(req.body.num);
        let square = num * num
        let sum = 0;
        while (square != 0) {
            sum = sum + square % 10;
            square = Math.floor(square / 10);
        }

        if (sum === num) {
            return res.status(200).send({
                "Massage": "Number is Neon"
            });
        } else {
            return res.status(200).send({
                "Message": "Number is Not Neon"
            });
        }
    } catch (err) {
        res.status(500).send({
            "error": err
        });
    }
});
module.exports = router;
const router = require('express')();

router.post('/factorial', (req, res) => {

	//Factorial logic goes here
	let number = parseInt(req.body.number);
	let fact = 1;

	for(let i =1 ;i<=number; i++){
		fact = fact * i
	}

	res.status(200).send({result: fact})

})

router.post('/palindrome', (req, res, next) => {
    //Palindrome Number
    try{
        var rem, temp, final = 0;
        var number = parseInt(req.body.number);
        console.log(req.body);
    
        temp = number;
        while(number>0){
            rem = number%10;
            number = parseInt(number/10);
            final = final*10+rem;
        }

        if(final==temp){
            res.status(200).send({ message: `${temp} is a Palindrome Number` });
        } else{
            res.status(200).send({ message: `${temp} is not a Palindrome Number` });
        }
    } catch(err){
        res.send({ Error: err }).status(500);
    }
});

router.post('/dudeney', (req, res) => {
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
            res.status(200).send({ message: "The Number is Dudeney Number" })
        } else {
            res.status(200).send({ message: "The Number is Not Dudeney Number" })
        }
    } catch (error) {
        res.send({ Error: error }).status(500)
    }

})

module.exports = router;

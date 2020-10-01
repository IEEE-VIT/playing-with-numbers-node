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

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
})

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
	
router.post('/disarium', (req, res) => {
    //Disarium Number
    try {
	let number = req.body.number
        let noOfDigits = number.toString().length

        let sum = 0; // Initialize sum of terms 
        let x = number; 
         let y = noOfDigits 
        while (y!==0) 
        { 
            let r = Math.floor(x%10);
            // Sum the digits by powering according to 
            // the positions 
            sum = (sum + Math.pow(r, noOfDigits));
            noOfDigits -= 1 
            x = x/10;
            y-- 
        } 
       
        // If sum is same as number, then number is a disarium number 
        if (sum == number) {
            res.status(200).send({ message: "The Number is a Disarium Number" })
        } else {
            res.status(200).send({ message: "The Number is Not a Disarium Number" })
        }
    } catch (error) {
        res.send({ Error: error }).status(500)
    }

})

module.exports = router;

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

module.exports = router;
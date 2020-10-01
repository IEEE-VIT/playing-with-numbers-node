const router = require('express')();

router.post('/factorial', (req, res) => {
	//Factorial logic goes here
	let number = parseInt(req.body.number);
	let fact = 1;

	for (let i = 1; i <= number; i++) {
		fact = fact * i;
	}

	res.status(200).send({ result: fact });
});

router.post('/palindrome', (req, res) => {
	//Palindrome logic goes here
});

router.post('/neon', (req, res) => {
	//Neon Number
	try {
		const number = req.body.number;
		let squaredNumber = number * number;
		let sumOfDigits = 0;
		while (squaredNumber) {
			sumOfDigits += squaredNumber % 10;
			squaredNumber = Math.floor(squaredNumber / 10);
		}
		if (sumOfDigits === number) {
			res.status(200).send({ message: 'The Number is Neon Number' });
		} else {
			res.status(200).send({ message: 'The Number is Not Neon Number' });
		}
	} catch (error) {
		res.status(500).send({ Error: error });
	}
});

router.post('/prime', (req, res) => {
    // Prime Number
    var num = parseInt(req.body.number);
    let count = 0;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            count = count+1;
            break;
        }
    }
    if(count > 0){
        res.status(200).send("Not Prime");
    }
    else{
        res.status(200).send("Prime");
    }
});

router.post('/perfect', (req, res) => {
    var num = parseInt(req.body.number);
    var sum = 1; 
  
    for (var i = 2; i * i <= num; i++) 
    { 
        if (num % i==0) 
        { 
            if(i * i != num) 
                sum = sum + i + num / i; 
            else
                sum = sum + i; 
        } 
    }  

    if (sum == num && num != 1){
        res.status(200).send("Perfect");
    }else{
        res.status(200).send("Not Perfect");
    } 
  
    
});


router.post('/perfect', (req, res) => {
    var numumber = parseInt(req.body.number);
  

		flag = number;
		while(number > 0)
		{
			remainder = number%10;
			addition = addition + remainder*remainder*remainder;
			number = parseInt(number/10);
		}

		if(addition == flag)
		{
			res.status(200).send("Armstrong");
		}
		else
		{
			res.status(200).send("Not Armstrong");
		}
    
});

router.post('/prime', (req, res) => {
    // Prime Number
    var num = parseInt(req.body.number);
    let count = 0;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            count = count+1;
            break;
        }
    }
    if(count > 0){
        res.status(200).send("Not Prime");
    }
    else{
        res.status(200).send("Prime");
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
        res.status(500).send({ Error: error })
    }
});
	
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
        res.status(500).send({ Error: error })
    }
});

module.exports = router;


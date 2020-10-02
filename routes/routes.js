const router = require("express")();

router.post("/reverse", (req, res) => {
	const originalString = req.body.string;
	const reverseString = originalString.split("").reverse().join("");
	res.json({
		original: originalString,
		reverse: reverseString,
	});
});

router.post('/factorial', (req, res) => {
	//Factorial logic goes here
	let number = parseInt(req.body.number);
	let fact = 1;

	for (let i = 1; i <= number; i++) {
		fact = fact * i;
	}

	res.status(200).send({ result: fact });
});

router.post('/odd_or_even', (req, res) => {
	let number = parseInt(req.body.number);
	if(number % 2 == 0){
		res.status(200).send({ message: 'The Number is an even number!' });
	} else {
		res.status(200).send({ message: 'The Number is an odd number!' });
	}
});

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
    try {
        const n = req.body.number;
        if(String(n) === String(n).split("").reverse().join("")) {
            res.status(200).send({ message: "The Number is Palindrome"});
        } else {
            res.status(200).send({ message: "The Number is not Palindrome"});
        }
    } catch (error) {
        res.status(500).send({ Error: error });
    }
});

router.post('/fibonacci', (req, res) => {
    //Fibonacci Series uptill a given number
    let num = req.body.number;
    let arr=[];
    arr.push(0);
    arr.push(1);
    for(let i=2;i<num;i++)
    {
        arr.push(arr[i-1]+arr[i-2]);
    }
    
    res.status(200).send(arr);
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

router.post("/leap-year", (req, res) => {
  let year = req.body.year;
  let message;

  if (year % 400 === 0) {
    message = `The year ${year} is a leap year`;
  } else if (year % 100 === 0) {
    message = `The year ${year} is not a leap year`;
  } else if (year % 4 === 0) {
    message = `The year ${year} is a leap year`;
  } else {
    message = `The year ${year} is not a leap year`;
  }

  res.status(200).send({ message });
});

module.exports = router;
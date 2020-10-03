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

router.post('/Automorphic_number', (req, res) => {
        let num = parseInt(req.body.number);
        let sq_num = num*num;  
 
        let str_num = num.toString();  
        let square = sq_num.toString();  
 
        if(square.endsWith(str_num))  
            res.status(200).send({ message: 'The Number is an automorphic number!'});
        else
            res.status(200).send({ message: 'The Number is not an automorphic number!'});
});


router.post('/odd_or_even', (req, res) => {
    let number = parseInt(req.body.number);
    if (number % 2 == 0) {
        res.status(200).send({ message: 'The Number is an even number!' });
    } else {
        res.status(200).send({ message: 'The Number is an odd number!' });
    }
});

router.post('/palindrome', (req, res) => {
    //Palindrome logic goes here
    try {
        const n = req.body.number;
        if (String(n) === String(n).split("").reverse().join("")) {
            res.status(200).send({ message: "The Number is Palindrome" });
        } else {
            res.status(200).send({ message: "The Number is not Palindrome" });
        }
    } catch (error) {
        res.status(500).send({ Error: error });
    }
});

router.post('/fibonacci', (req, res) => {
    //Fibonacci Series uptill a given number
    let num = req.body.number;
    let arr = [];
    arr.push(0);
    arr.push(1);
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
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
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count = count + 1;
            break;
        }
    }
    if (count > 0) {
        res.status(200).send("Not Prime");
    }
    else {
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
        while (y !== 0) {
            let r = Math.floor(x % 10);
            // Sum the digits by powering according to 
            // the positions 
            sum = (sum + Math.pow(r, noOfDigits));
            noOfDigits -= 1
            x = x / 10;
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

router.post("/perfect", (req, res) => {
    try {
        let number = req.body.number;
        let sum = 0;
        for (let i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
        if (sum == number) {
            res.status(200).send({ message: "The Number is a Perfect Number" });
        } else {
            res.status(200).send({ message: "The Number is Not a Perfect Number" });
        }
    } catch (error) {
        res.status(500).send({ Error: error });
    }
});

router.post('/harshad', (req, res) => {
    //Harshad Number
    try {
        let number = req.body.number
        let sumOfDigits = 0;
        while (number) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }
        //if number is divisible by sum of all digits it is harshad number
        if (number % sumOfDigits === 0) {
            res.status(200).send({ message: "The Number is a Harshad Number" })
        } else {
            res.status(200).send({ message: "The Number is Not a Harshad Number" })
        }
    } catch (error) {
        res.status(500).send({ Error: error })
    }
})

router.post('/tech-number', (req, res) => {
    let number = req.body.number;
    let leftSideNumber;
    let rightSideNumber;
    let num;
    let sumOfSquare = 0;
    num = number;
    let numCount = num.toString().length;
    if (numCount % 2 == 0) {
        num = number;
        leftSideNumber = Math.floor(num / (Math.pow(10, numCount / 2)));
        num = num % Math.pow(10, numCount / 2);
        rightSideNumber = num;
        sumOfSquare = (leftSideNumber + rightSideNumber) * (leftSideNumber + rightSideNumber);
        if (number == sumOfSquare) {
            res.status(200).send({ message: 'The Number is a Tech number!' });
        }
        else {
            res.status(200).send({ message: 'The Number is not a Tech number!' });
        }
    }
    else {
        res.status(200).send({ message: 'The Number is not a Tech number!' });
    }
})


router.post('/duck-number', (req, res) => {
    let num = req.body.number;
    let flag = false;
    num = num.toString();
    let i = 0, n = num.length;
    while (i < n && num[i] == '0')
        i++;

    while (i < n) {
        if (num[i] == '0')
            flag = true;
        i++;
    }
    if (flag) {
        res.status(200).send({ message: 'Duck Number' });

    } else {
        res.status(200).send({ message: 'Not Duck Number' });
    }
});

router.post('/buzz', (req, res) => {
    let num = req.body.number;
    if (num % 10 == 7 || num % 7 == 0) {
        res.status(200).send({ message: 'Buzz Number' });
    } else {
        res.status(200).send({ message: 'Not a Buzz Number' });
    }
});

router.post('/armstrong',(req,res)=>{
    const input = req.body.number;
    let digits = 0;
    let digitArr = [];
    let temp = input;
    while(temp>0)
    {
        digits+=1;
        digitArr.push(parseInt(temp%10));
        temp = parseInt(temp/10);
    }
    let sum=0;
    digitArr.forEach((num)=>{
       sum+=( num**digits );
    });
    
    if(sum==input)
    {
        res.status(200).json(
            {
                result: "It is an Armstrong number",
                number: input,
            }
        );
    }
    else
    {
        res.status(200).json(
            {
                result: "It is NOT an Armstrong number",
                number: input,
            }
        );
    }
});

module.exports = router;

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
 
        if(square.endsWith(str_num)){ 
            res.status(200).send({ message: 'The Number is an automorphic number!'});
        } else{
            res.status(200).send({ message: 'The Number is not an automorphic number!'});
        }    
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

router.post('/pronic-number', (req, res) => {
    let num = parseInt(req.body.number);

    if (isNaN(num) || num < 0) {
        return res.status(200).send({ message: 'Not Pronic Number' });
    }

    let isPronic = false;

    for (let i = 0; i <= Math.sqrt(num); i++) {
        if (i * (i + 1) === num) {
            isPronic = true;
            break;
        }
    }

    if (isPronic) {
        res.status(200).send({ message: 'Pronic Number' });
    } else {
        res.status(200).send({ message: 'Not Pronic Number' });
    }
});
 


router.post('/leap_year', (req, res) => {
   let year = parseInt(req.body.number);
   function leapyear(year)
    {
        let res = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        if(res == true){
            return(res.status(200).send({ message: 'the given year is a leap year' }));
        } else{
            return(res.status(200).send({ message: 'the given year is not a leap year' }));
        }
    }
    leapyear(year);
});


router.post('/perfect-number', (req, res) => {
    let num = parseInt(req.body.number);
    let sum = 0;

    // find divisors
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num && num !== 0) {
        res.status(200).send({ message: 'Perfect Number' });
    } else {
        res.status(200).send({ message: 'Not Perfect Number' });
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

router.post('/magic',(req,res)=>{
    try{
        let num =parseInt(req.body.number)
        let sum = 0 
        while(num > 0 || sum > 9){
            if (num == 0){
                num = sum
                sum = 0
            }
            sum += num %10
            num = Math.floor(num/10)
        }
        if (sum == 1){
            res.status(200).send({message : "The Number is a Magic Number"})
        }else{
            res.status(200).send({message: "The number is not a magic number"})
        }

    }catch(err){
        console.error(err.messgae)
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

router.get('/krishnamurthy', (req, res)=>{
    //A Krishnamurthy number is a number whose sum of the factorial of digits is equal to the number itself
    try {
        let number = req.body.number;
        let sumOfFactorials=0;
        let temp=number;
        
        const factorial=(num)=>{
            let fact=1;
            while(num!=0){
                fact=fact*num;
                num--;
            }
            return fact;
        }

        while (temp!=0) {
          sumOfFactorials+=factorial(temp%10);
          temp=Math.floor(temp/10);
        }
        if(sumOfFactorials===parseInt(number)){
            res.status(200).send({ message: "The Number is a Krishnamurthy Number" });
        }else{
            res.status(200).send({ message: "The Number is Not a Krishnamurthy Number" });   
        }
    } catch (error) {
        res.status(500).send({ Error: error })
    }
});

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

router.post('/super-niven-number', (req, res) => {
    let num = parseInt(req.body.number);

    if (isNaN(num) || num <= 0) {
        return res.status(200).send({ message: 'Not Super Niven Number' });
    }

    // Calculate sum of digits
    let sum = 0, temp = num;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    // Check if number is Niven
    if (num % sum !== 0) {
        return res.status(200).send({ message: 'Not Super Niven Number' });
    }

    // Check if digit sum is also Niven
    let digitSum = sum;
    let sumOfDigitSum = 0, temp2 = digitSum;
    while (temp2 > 0) {
        sumOfDigitSum += temp2 % 10;
        temp2 = Math.floor(temp2 / 10);
    }

    if (digitSum % sumOfDigitSum === 0) {
        res.status(200).send({ message: 'Super Niven Number' });
    } else {
        res.status(200).send({ message: 'Not Super Niven Number' });
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

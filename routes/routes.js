const router = require("express")();

router.post("/factorial", (req, res) => {
  //Factorial logic goes here
  let number = parseInt(req.body.number);
  let fact = 1;

  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }

  res.status(200).send({ result: fact });
});

router.post("/palindrome", (req, res) => {
  //Palindrome logic goes here
});

router.post("/dudeney", (req, res) => {
  //Dudeney Number
  try {
    let number = req.body.number;
    let sumOfDigits;
    const root = Math.cbrt(number);

    while (number) {
      sumOfDigits += number % 10;
      number = Math.floor(number / 10);
    }
    if (sumOfDigits == root) {
      res.status(200).send({ message: "The Number is Dudeney Number" });
    } else {
      res.status(200).send({ message: "The Number is Not Dudeney Number" });
    }
  } catch (error) {
    res.send({ Error: error }).status(500);
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

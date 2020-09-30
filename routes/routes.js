const router = require("express")();

router.post("/factorial", (req, res) => {
  //Factorial logic goes here
});

router.post("/palindrome", (req, res) => {
  //Palindrome logic goes here
});

router.post("/reverse", (req, res) => {
  const originalString = req.body.string;
  const reverseString = originalString.split("").reverse().join("");
  res.json({
    original: originalString,
    reverse: reverseString,
  });
});

module.exports = router;

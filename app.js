const express = require('express');
const router = express.Router();

// Helper function to check if a number is a Krishnamurthy number
function isKrishnamurthy(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;

    // factorial of digit
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
      fact *= i;
    }

    sum += fact;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

// Fixed endpoint
router.get('/krishnamurthy', (req, res) => {
  const number = parseInt(req.query.number, 10); // ✅ use query instead of body

  if (isNaN(number)) {
    return res.status(400).json({ error: "Please provide a valid number in the query (e.g. ?number=145)" });
  }

  if (isKrishnamurthy(number)) {
    res.json({ message: "The Number is a Krishnamurthy Number" });
  } else {
    res.json({ message: "The Number is NOT a Krishnamurthy Number" });
  }
});

module.exports = router;

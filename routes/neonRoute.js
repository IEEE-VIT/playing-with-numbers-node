const express = require('express');
const router = express.Router();
//function to check neon 
function checkNeon(x) {
    let square = x * x
    let sum = 0;
    while (square != 0) {
        sum = sum + square % 10;
        square = Math.floor(square / 10);
    }

    if (sum === x) {
        return true
    } else {
        return false
    }
}

router.get('/neon/:num', (req, res) => {
    let num = Number.parseInt(req.params.num);
    let result = checkNeon(num);
    return res.json({
        "isNeon": result
    })
});

module.exports = router;
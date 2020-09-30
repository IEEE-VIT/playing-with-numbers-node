const router = require('express')();

router.post('/factorial', (req, res) => {
	//Factorial logic goes here
})

router.post('/palindrome', (req, res) => {
	//Palindrome logic goes here
})

router.post('/neon', (req, res) => {
	function neon(x) {
		var sq = x * x
		var output = [];
		var strn = sq.toString();

		for (var i = 0, len = strn.length; i < len; i += 1) {
			output.push(+strn.charAt(i));
		}

		for (var i = 0, sum = 0; i < output.length; sum += output[i++]);

		if (sum === x) {
			return res.send({ msg: true, detail: 'The Number is a Neon Number!' })
		} else {
			return res.send({ msg: false, detail: "The number is not a Neon Number" })
		}
	}
	
	//it is assumed that the user sends a post request with the number
	//the variable name is assumed to be number
	var data = req.body.number
	if (isNaN(data)) {
		return res.send({ msg: false, detail: "Error: Data type is invalid." })
	} else {
		neon(data)
	}

})

module.exports = router;
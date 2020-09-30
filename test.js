async function checkNeon(x) {
	var sq = x * x
	// var number = sq
	var output = [];
	var strn = sq.toString();

	for (var i = 0, len = strn.length; i < len; i += 1) {
		await output.push(+strn.charAt(i));
	}

	for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
	// console.log(sum);

	if (sum === x) {
		console.log(true)
	} else {
		console.log(false)
	}
}

checkNeon(9)
const getFibonacci = (req, res) => {
	let { numbers } = req?.query;

	const arr = [1, 1];
	if (!numbers) {
		numbers = 20;
	}

	if (!isNaN(numbers)) {
		for (let i = 1; i <= numbers; i++) {
			arr.push(arr[i] + arr[i - 1]);
		}
		res.status(200).send(arr.slice(0, numbers));
	} else {
		res.status(400).send({ message: "ERROR! Wrong Param." });
	}
};

module.exports = { getFibonacci };

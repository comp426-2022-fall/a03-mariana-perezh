function roll(sides, dice, rolls) {	
	const results = new Array(rolls);

	for (let i=0; i<rolls; i++) {
		results[i] = randNum(sides);
	}

	const m = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: results
	}

	return m;
}

function randNum(sides) {
	var randomNum = Math.floor(Math.random() * this.sides) + 1;
	return randomNum;
}

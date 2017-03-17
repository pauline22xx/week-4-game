var crystals = {
	blue:
	{
		name : "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};
console.log(crystals);


$( ".gemImage" ).click(function() {
  //stuff to when gems are clicked
});

console.log(crystals);
generateCrystalValues();
console.log(crystals);
generateCrystalValues();

function generateCrystalValues(){
	crystals.blue.value = generateRandomNumber(19, 120);
	crystals.green.value = generateRandomNumber(19, 120);
	crystals.red.value = generateRandomNumber(19, 120);
	crystals.yellow.value = generateRandomNumber(19, 120);
}

function generateRandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}








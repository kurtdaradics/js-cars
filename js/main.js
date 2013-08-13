var cars = [
	{
		"make" : "BMW",
		"model" : "M Coupe",
		"color" : "green",
		"weight" : 3130,
		"horsepower" : 240,
		"image" : "mcoupe.jpeg"
	},
	{
		"make": "Porsche",
		"model": "Boxster",
		"color": "silver",
		"weight": 2980,
		"horsepower": 217,
		"image": "boxster.jpg"
	},
	{
		"make": "Audi",
		"model": "TT",
		"color": "black",
		"weight": 2778,
		"horsepower": 197,
		"image": "tt.jpg"
	}
];



// everything in here will wait until the page loads
$(function() {
/*	// solving the problem with an each loop
	var fastest = cars[0];
	$(cars).each(function(index, item) {
		var fastest_pw = fastest.horsepower / fastest.weight;
		var item_pw = item.horsepower / item.weight;
		if (fastest_pw > item_pw) {

		} else {
			fastest = item;
		}
	});

	console.log(fastest);
*/

	// the second solution uses sorting to find the fastest car
	pw_ratios = [];
	ratios_to_cars = {};
	
	$(cars).each(function(i, car) {
		pw_ratios.push(car.horsepower / car.weight);
		ratios_to_cars[car.horsepower / car.weight] = i;
	});
	pw_ratios.sort();
	largest_pw = pw_ratios.pop();
	car_id = ratios_to_cars[largest_pw];
	winner = cars[car_id];

	second_pw = pw_ratios.pop();
	second_id = ratios_to_cars[second_pw];
	second = cars[second_id]
	console.log(winner, second);




});






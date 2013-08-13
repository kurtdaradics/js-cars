var cars = [
	{
		"make" : "BMW",
		"model" : "M Coupe",
		"color" : "green",
		"weight" : 3130,
		"horsepower" : 240
	},
	{
		"make": "Porsche",
		"model": "Boxster",
		"color": "silver",
		"weight": 2980,
		"horsepower": 217
	},
	{
		"make": "Audi",
		"model": "TT",
		"color": "black",
		"weight": 2778,
		"horsepower": 197
	}
];



$(function() {

	// everything in here will wait until the page loads
	// var x = 4;
	// var y = 5;
	// var b = x + y;

	// var first_name = 'shaun';
	// var last_name = 'russell';
	// var full_name = first_name + last_name;

	// $('h1').css('fontSize', b).text(full_name);

	// $.ajax('/cars.json', {
	// 	complete : function(response) {
	// 		console.log(response.responseJSON);
	// 	}
	// });

	console.log(cars);





	function race(car1, car2) {
		// determine the winner
		var car1_pw = car1.horsepower / car1.weight;
		var car2_pw = car2.horsepower / car2.weight;
		if (car1_pw > car2_pw) {
			return car1;
		} else {
			return car2;
		}
	}

	var winner = race(cars[0], cars[1]);
	console.log(winner);








	$(cars).each(function(index, car) {
		var li = '<li>' + car.color + ' ' + car.model + '</li>';
		var power_to_weight = '<li>' + car.horsepower / car.weight + '</li>';
		$('#cars_list').append(li);
		$('#cars_list').append(power_to_weight);
	});




});



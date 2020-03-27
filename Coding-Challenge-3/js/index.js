document.addEventListener("click", function() {
	var name;
	var num = document.getElementById("fizzBuzzNumber");
	for (let i = 0; i < num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			name = "fizzbuzz"
		}
		else if (i % 3 === 0) {
			name = "fizz"
		}
		else if (i % 5 === 0) {
			name = "buzz"
		}
		document.getElementById("box").innerHTML = name;
	}
});
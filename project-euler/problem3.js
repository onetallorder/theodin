// Project Euler: Problem 3 (http://projecteuler.net/problem=3)

/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

function getMaxPrimeFactor (input) {
    var temp = input;
	for(var i = 2; i < temp; i++) {
		while (temp % i === 0) {
			temp /= i;
		}
	}	
	console.log(temp);
}

getMaxPrimeFactor(600851475143);
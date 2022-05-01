// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of 600851475143? (should be 6857)

function largestPrimeNumber(num) {
  //create an array of prime numbers that is under input number
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }

  //run a loop that divides num by arr of prime nums
  //add the num to a new prime factor arr if it divides the current quotient without a remainder

  let primeFactors = [];
  for (let k = 0; k < primes.length; k++) {
    if (num % primes[k] == 0) {
      primeFactors.unshift(primes[k]);
    }
  }

  //   console.log("prime numbers:", primes);
  //   console.log("prime factors of input number:", primeFactors);
  console.log("highest prime factor:", primeFactors[0]);
}
// largestPrimeNumber(7);
// largestPrimeNumber(13195);
largestPrimeNumber(92940);

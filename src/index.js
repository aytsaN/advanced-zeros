module.exports = function getZerosCount(number, base) {
    let resultZeros = number;
    let primes = countPrimes(base);

    for (let n = 2; n < primes.length; n++) {
        if (primes[n]) {
            let countZeros = 0;
            for (let zeros = Math.floor(number / n); zeros > 0;) {
                countZeros += zeros;
                zeros = Math.floor(zeros / n);
            }
            resultZeros = Math.min(resultZeros, Math.floor(countZeros / primes[n]));
        }
    }
    return resultZeros;
}

function countPrimes(base) {
    let primes = [];
    let i = 1,
        n = 2;

    while (n <= base) {
        if (base % n === 0) {
            primes[n] = i++;
            base /= n;
        } else {
            i = 1;
            n++;
        }
    }
    return primes;
}
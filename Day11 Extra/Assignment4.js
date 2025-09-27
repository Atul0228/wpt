function array() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Number(process.argv[i + 2]);
    }

    let sumEven = 0;
    let sumEvenIndex = 0;
    let sumPrime = 0;
    let primeCount = 0;

    // Sum of even numbers
    for (let i = 0; i < 10; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        }
    }
    console.log("Sum of even numbers is", sumEven);

    // Sum of elements at even indices (i.e., index 1, 3, 5,...)
    for (let i = 0; i < 10; i++) {
        if ((i + 1) % 2 === 0) {
            sumEvenIndex += arr[i];
        }
    }
    console.log("Sum of elements at even positions is", sumEvenIndex);

    // Sum of prime numbers
    for (let i = 0; i < 10; i++) {
        let num = arr[i];
        if (num < 2) continue;

        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrime += num;
            primeCount++;
            console.log("Prime:", num);
        }
    }

    console.log("Sum of prime numbers is", sumPrime);
    console.log("Count of prime numbers is", primeCount);
}

array();

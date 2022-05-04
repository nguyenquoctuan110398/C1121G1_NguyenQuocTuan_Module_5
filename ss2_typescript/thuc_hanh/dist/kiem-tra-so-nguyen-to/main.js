function isPrime(number) {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let array = [2, 3, 5, 1, 8, 10, 22, 51, 53];
let sum = 0;
for (let number of array) {
    if (isPrime(number)) {
        sum += number;
    }
}
console.log("Tổng các số nguyên tố có trong mảng trên là: " + sum);
//# sourceMappingURL=main.js.map
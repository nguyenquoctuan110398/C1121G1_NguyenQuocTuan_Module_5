function fibonacci(number) {
    if (number == 0) {
        return 0;
    }
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let sum = 0;
let count = 5;
let str = "First " + count + " digits of the fibonacci sequence is: ";
for (let i = 0; i < count; i++) {
    str = str + fibonacci(i) + ", ";
    sum += fibonacci(i);
}
console.log(str);
console.log("Sum of the first 10 numbers of the fibonacci sequence is: " + sum);
//# sourceMappingURL=main.js.map
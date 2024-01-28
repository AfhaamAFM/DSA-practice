
function printName(n, name) {
    if (n <= 0) return
    printName(n - 1, name)
    console.log(name)
}

function sumOfN(n) {

    if (n < 1) return 0

    return n + sumOfN(n - 1)

}
function factorial(n) {

    if (n == 1) return 1

    return n * factorial(n - 1)

}

function print1ToN(i, n) {
    if (i > n) return;
    print1ToN(i + 1, n)
    console.log(i);

}


function reverseArray(i, arr, n) {

    if (i >= n / 2) return;

    [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]];
    return reverseArray(i + 1, arr, n)

}
function checkStringPalindrome(i, string, n) {

    if (i >= n / 2) return true;

    if (string[i] != string[n - 1 - i]) return false
    return checkStringPalindrome(i + 1, string, n)

}

function fibonacciSeries(n) {

    if (n <= 1) return n


    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2)

}

function main() {

    for (let i = 0; i <= 5; i++) {
        const b = fibonacciSeries(i)
        console.log(b)
    }
}


main()


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


function reverseArray(arr, start, last) {

    if (last <= start) return arr;

    [arr[start], arr[last]] = [arr[last], arr[start]];
    return reverseArray(arr, start + 1, last - 1)

}
function main() {
    // console.log(reverseArray([4, 3, 1, 4], 0, 4))

    let arr = [4, 3, 5, 1, 7, 3, 1, .6, "dsads"];

    const revered = reverseArray(arr, 0, arr.length - 1)

    console.log(revered);
}


main()

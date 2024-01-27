import { getUserInput } from "./utils.js";



(async () => {
    const n1 = await getUserInput('Enter the First number')
    const n2 = await getUserInput('Enter the second number')
    const dig = getGCD(Number(n1), Number(n2))
    console.log(dig);
})()

function getGCD(n1, n2) {

    for (let i = Math.min(n1, n2); i >= 1; i--) {

        if (n1 % i === 0 && n2 % i === 0) {
            return i;
        }
    }

}
function printAllDivisors(n) {
    let div = []
    for (let i = 1; i * i <= n; i++) {

        if (n % i === 0) {

            div.push(i)

            if ((n / i) != i) div.push(n / i)
        }
    }
    return div.sort((a, b) => a - b)
}
function checkArmstrong(n) {

    let cubicSum = 0
    let temp = n
    while (n > 0) {

        let lastDig = n % 10
        n = Math.floor(n / 10)

        cubicSum += Math.pow(lastDig, 3)
    }

    if (cubicSum === temp) return "Armstrong number"
    console.log(cubicSum);
    return "Not Armstrong number"

}
function countDigits(n) {
    // input==>3434343434
    //output==> 10
    let num = (Number(n))
    let count = 0

    while (num > 0) {
        // let rem = num % 10
        // num = num - rem
        num = Math.floor(num / 10)
        count++
    }

    console.log(count);
}
function countDigitsByLog(n) {

    let num = (Number(n))


    return Math.floor(Math.log10(num) + 1)

}

function reverseNum(n) {
    // 66776
    // 67766
    let num = (Number(n))
    let rev = 0

    while (num > 0) {
        let rem = num % 10
        num = Math.floor(num / 10)
        rev = rev * 10 + rem
    }

    console.log(rev);
}
function checkPalindrome(n) {
    // 66776
    // 67766
    let num = (Number(n))
    let temp = num
    let rev = 0

    while (num > 0) {
        let rem = num % 10
        num = Math.floor(num / 10)
        rev = rev * 10 + rem
    }

    if (rev === temp) return console.log("Palindrome Number")
    else console.log("Not Palindrome Number")
}


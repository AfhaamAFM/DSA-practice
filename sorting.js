import { getUserInput } from "./utils.js"

async function main() {


    selectionSort()

}

async function selectionSort() {
    const stringArray = await getUserInput("Enter input as array separated by commas 1,2,3,4,5....")

    let arr = [4, 6, 3, 6, 2, 1, 55, 2, 323, 12]

    let len = arr.length

    for (let i = 0; i < len - 1; i++) {

        for (let j = i + 1; j < len; j++) {
            console.log(arr[i], arr[j]);
            if (arr[i] > arr[j]) {

                [arr[i], arr[j]] = [arr[j], arr[i]]; //swapping values
            }

        }
    }

    // console.log('====================================');
    console.log(arr);
    // console.log('====================================');


}




main()
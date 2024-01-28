import { getUserInput } from "./utils.js";

async function main() {

    var containsDuplicate = function (nums) {

        const hashMap = new Map()
        let len = nums.length
        for (let i = 0; i < len; i++) {

            hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
            if (hashMap.get(nums[i]) >= 2) return true
        }
  
        return false

    };
    

}


async function findArrayFrequencies() {
    const stringArray = await getUserInput("Enter input as array separated by commas 1,2,3,4,5....")

    const numberArray = stringArray.split(",").map(num => Number(num))

    const hashMap = new Map()

    let length = numberArray.length

    for (let i = 0; i < length; i++) {

        // console.log(hashMap.get(numberArray[i]))
        hashMap.set(numberArray[i], (hashMap.get(numberArray[i]) || 0) + 1)

    }


    console.log(hashMap);

    let obj = Object.fromEntries(hashMap)
    console.log(obj);
}

main();

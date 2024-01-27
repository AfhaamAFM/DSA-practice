
import readline from 'readline'

export function getUserInput(question) {
    return new Promise(async (resolve, reject) => {

        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        r1.question(`${question} : \n`, (answer) => {
            resolve(answer)
            r1.close()
        })

    })
} 
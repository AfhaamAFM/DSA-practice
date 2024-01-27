
const { getUserInput } = require('./utils')



const main = async function () {

    const n = await getUserInput("Give the input \n")


    pattern22(Number(n))


}

main()


function pattern22(n) {
    // 5 5 5 5 5 5 5 5 5 
    // 5 4 4 4 4 4 4 4 5 
    // 5 4 3 3 3 3 3 4 5 
    // 5 4 3 2 2 2 3 4 5 
    // 5 4 3 2 1 2 3 4 5 
    // 5 4 3 2 2 2 3 4 5 
    // 5 4 3 3 3 3 3 4 5 
    // 5 4 4 4 4 4 4 4 5 
    // 5 5 5 5 5 5 5 5 5 

    for (let i = 0; i < 2 * n - 1; i++) {


        for (let j = 0; j < 2 * n - 1; j++) {


            let top = i
            let bottom = j
            let right = 2 * n - 2 - j
            let left = 2 * n - 2 - i

            process.stdout.write(`${n - Math.min(Math.min(top, bottom), Math.min(right, left))} `)

        }



        process.stdout.write('\n')

    }

}
function pattern21(n) {
    // *********
    // *       *
    // *       *
    // *       *
    // *       *
    // *       *
    // *       *
    // *       *
    // *********
    for (let i = 1; i < n; i++) {


        for (let j = 1; j < n; j++) {

            if ((i === 1 || i == n - 1 || j == 1 || j == n - 1)) {
                process.stdout.write(`*`)
            } else {
                process.stdout.write(' ')
            }

        }



        process.stdout.write('\n')

    }

}
function pattern20(n) {
    // *        *
    // **      **
    // ***    ***
    // ****  ****
    // **********
    // ****  ****
    // ***    ***
    // **      **
    // *        *    
    let space = 2 * n - 2
    for (let i = 1; i <= 2 * n - 1; i++) {
        let stars = i

        if (i > n) stars = 2 * n - i

        for (let j = 1; j <= stars; j++) {

            process.stdout.write(`*`)

        }
        for (let j = 0; j < space; j++) {

            process.stdout.write(` `)

        }
        for (let j = 1; j <= stars; j++) {

            process.stdout.write(`*`)

        }

        space = i < n ? space - 2 : space + 2

        process.stdout.write('\n')

    }

}

function pattern19(n) {
    // **********
    // ****  ****
    // ***    ***
    // **      **
    // *        *
    // *        *
    // **      **
    // ***    ***
    // ****  ****
    // **********    
    pattern17(Number(n))
    pattern18(Number(n))
}
function pattern18(n) {
    // *        *
    // **      **
    // ***    ***
    // ****  ****
    // **********

    let space = 2 * n - 2
    for (let i = 0; i < n; i++) {

        for (let j = 0; j <= i; j++) {

            process.stdout.write(`*`)

        }
        for (let j = 0; j < space; j++) {

            process.stdout.write(` `)

        }
        for (let j = 0; j <= i; j++) {

            process.stdout.write(`*`)

        }
        space -= 2


        process.stdout.write('\n')
    }

}
function pattern17(n) {
    // **********
    // ****  ****
    // ***    ***
    // **      **
    // *        *


    let space = 0
    for (let i = 0; i < n; i++) {

        for (let j = n; j > i; j--) {

            process.stdout.write(`*`)

        }
        for (let j = 0; j < space; j++) {

            process.stdout.write(` `)

        }
        for (let j = n; j > i; j--) {

            process.stdout.write(`*`)

        }
        space += 2


        process.stdout.write('\n')
    }

}
function pattern16(n) {
    // E 
    // D E 
    // C D E 
    // B C D E 
    // A B C D E


    for (let i = 0; i < n; i++) {
        let charCode = 65 + n - 1

        for (let j = i; j >= 0; j--) {

            process.stdout.write(`${String.fromCharCode(charCode - j)} `)

        }


        process.stdout.write('\n')
    }

}
function pattern15(n) {
    //      A
    //     ABA
    //    ABCBA
    //   ABCDCBA
    //  ABCDEDCBA


    for (let i = 0; i < n; i++) {
        let charCode = 65
        for (let j = 0; j <= n - i; j++) {

            process.stdout.write(`  `)
        }
        for (let j = 0; j <= i; j++) {

            process.stdout.write(`${String.fromCharCode(charCode)} `)
            charCode++
        }

        charCode = 65 + i - 1
        for (let j = i; j > 0; j--) {
            process.stdout.write(`${String.fromCharCode(charCode)} `)
            charCode--

        }

        process.stdout.write('\n')
    }

}

function pattern14(n) {

    // A 
    // B B 
    // C C C 
    // D D D D 
    // E E E E E 
    // F F F F F F 
    let charCode = 65

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {

            // console.log(charCode, "CCHH");
            process.stdout.write(`${String.fromCharCode(charCode)} `)
        }

        process.stdout.write('\n')
        charCode++
    }

}
function pattern13(n) {
    // A 
    // A B 
    // A B C 
    // A B C D 
    // A B C D E

    for (let i = 0; i < n; i++) {
        let charCode = 65

        for (let j = 0; j < n - i; j++) {

            process.stdout.write(`${String.fromCharCode(charCode)} `)
            charCode++
        }
        process.stdout.write('\n')
    }

}
function pattern12(n) {
    // A 
    // A B 
    // A B C 
    // A B C D 
    // A B C D E

    for (let i = 0; i < n; i++) {
        let charCode = 65

        for (let j = 0; j <= i; j++) {

            process.stdout.write(`${String.fromCharCode(charCode)} `)
            charCode++
        }
        process.stdout.write('\n')
    }

}

function pattern11(n) {
    // 1
    // 2 3
    // 4 5 6
    // 7 8 9 10
    // 11 12 13 14 15
    let count = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {

            process.stdout.write(`${count} `)
            count++

        }
        process.stdout.write("\n")

    }
}

function pattern10(n) {


    // 1      1
    // 12    21
    // 123  321
    // 12344321
    let space = 2 * (n - 1)
    for (let i = 0; i < n; i++) {

        //number 1 
        for (let j = 1; j <= i; j++) {

            process.stdout.write(`${j}`)

        }
        //space
        for (let j = 1; j <= space; j++) {

            process.stdout.write(" ")

        }
        for (let j = i; j >= 1; j--) {

            process.stdout.write(`${j}`)

        }

        process.stdout.write('\n')
        space -= 2

    }

}
function pattern9(n) {
    // 1
    // 0 1
    // 1 0 1
    // 0 1 0 1
    // 1 0 1 0 1
    // 0 1 0 1 0 1
    // 1 0 1 0 1 0 1
    // 0 1 0 1 0 1 0 1
    // 1 0 1 0 1 0 1 0 1
    let print
    for (let i = 0; i < n; i++) {

        print = i % 2 === 0 ? 0 : 1

        for (let j = 0; j < i; j++) {

            process.stdout.write(`${print} `)

            print = 1 - print
        }
        process.stdout.write('\n')

    }

}

function pattern8(n) {

    // * 
    // * * 
    // * * * 
    // * * * * 
    // * * * * * 
    // * * * * 
    // * * * 
    // * * 
    // *     

    for (let i = 0; i <= 2 * n - 1; i++) {

        let stars = i > n ? 2 * n - i : i

        for (j = 0; j < stars; j++) {
            process.stdout.write("* ")
        }


        process.stdout.write("\n")
    }//outer loop
}

function pattern7(n) {
    //               *                           
    //             * * *                         
    //           * * * * *                       
    //         * * * * * * *                     
    //       * * * * * * * * *                   
    //     * * * * * * * * * * *                 
    //   * * * * * * * * * * * * *               
    //   * * * * * * * * * * * * *               
    //     * * * * * * * * * * *                 
    //       * * * * * * * * *                   
    //         * * * * * * *                     
    //           * * * * *                       
    //             * * *                         
    //               *  
    for (let i = 0; i < n; i++) {

        if (i < n / 2) {
            for (j = 0; j < n - i - 1; j++) {
                process.stdout.write("  ")
            }
            for (j = 0; j < 2 * i + 1; j++) {
                process.stdout.write("* ")
            }
            for (j = 0; j < n - i - 1; j++) {
                process.stdout.write("  ")
            }
        } else if (i >= n / 2) {
            for (j = 0; j < i; j++) {
                process.stdout.write("  ")
            }
            for (j = 0; j < (2 * n) - (2 * i + 1); j++) {
                process.stdout.write("* ")
            }
            for (j = 0; j < i; j++) {
                process.stdout.write("  ")
            }
        }
        process.stdout.write("\n")
    }
}
function pattern6(n) {
    // * * * * * * * * * 
    //   * * * * * * *   
    //     * * * * *     
    //       * * *       
    //         *   
    for (let i = 0; i < n; i++) {

        for (j = 0; j < i; j++) {
            process.stdout.write("  ")
        }
        for (j = 0; j < (2 * n) - (2 * i + 1); j++) {
            process.stdout.write("* ")
        }
        for (j = 0; j < i; j++) {
            process.stdout.write("  ")
        }
        process.stdout.write("\n")
    }
}
function pattern5(n) {
    //         *         
    //       * * *       
    //     * * * * *     
    //   * * * * * * *   
    // * * * * * * * * * 
    for (let i = 0; i < n; i++) {

        for (j = 0; j < n - i - 1; j++) {
            process.stdout.write("  ")
        }
        for (j = 0; j < 2 * i + 1; j++) {
            process.stdout.write("* ")
        }
        for (j = 0; j < n - i - 1; j++) {
            process.stdout.write("  ")
        }
        process.stdout.write("\n")
    }
}

function pattern4(n) {
    // 1 2 3 4 5 
    // 1 2 3 4 
    // 1 2 3 
    // 1 2 
    // 1 
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(`${j} `)

        }

        process.stdout.write("\n")

    }
}
function pattern3(n) {
    // * * * * * 
    // * * * * 
    // * * * 
    // * * 
    // * 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(`${"*"} `)

        }

        process.stdout.write("\n")

    }
}
function pattern2(n) {
    // 1 
    // 2 2 
    // 3 3 3 
    // 4 4 4 4 
    // 5 5 5 5 5 

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${i} `)

        }

        process.stdout.write("\n")

    }
}
function pattern1(n) {
    // * * * * * 
    // * * * * * 
    // * * * * * 
    // * * * * * 
    // * * * * *     

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write("* ")

        }

        process.stdout.write("\n")

    }
}


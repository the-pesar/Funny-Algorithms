let num1;
let num2;
let num3;
let num4;
let num5;

const checkPromptValidate = num => {
    if (!isNaN(Number(num))) {
        if (num !== null) {
            if (num.trim() !== '') return true
        }
    }
    return false
}

while (true) {
    num1 = prompt('Enter First Number')
    const isValid = checkPromptValidate(num1)
    if (isValid) {
        num2 = prompt('Enter Second Number')
        const isValid = checkPromptValidate(num2)
        if (isValid) {
            num3 = prompt('Enter Third Number')
            const isValid = checkPromptValidate(num3)
            if (isValid) {
                num4 = prompt('Enter Fourth Number')
                const isValid = checkPromptValidate(num4)
                if (isValid) {
                    num5 = prompt('Enter Fifth Number')
                    const isValid = checkPromptValidate(num5)
                    if (isValid) break
                }
            }
        }
    }
}

let currentArray = [Number(num1), Number(num2), Number(num3), Number(num4), Number(num5)]

let monotonicChecker = 0
for(let i = 0; i < currentArray.length -1;i++) {
    let prevNum = currentArray[i];
    let currentNum = currentArray[i + 1]
   if (prevNum <= currentNum) {
        monotonicChecker += 1
    }else {
        monotonicChecker -= 1
    }
}

if (monotonicChecker == 4) {
    alert("Increment Monotonic")
}else if (monotonicChecker == -4) {
    alert("Decrement Monotonic")
}else {
    alert("iS Not Monotonic")
}
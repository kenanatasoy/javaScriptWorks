
function findAndReturnPrimeNumbers()
{
    
    let args = []

    loop1: 
    for (let i = 0; i < arguments.length; ++i){
        if(arguments[i] == 2){
            args.push(arguments[i])
        }
        if (arguments[i] > 2){
           
            loop2:
            for (let j = 2; j < arguments[i]; ++j){
                if (arguments[i] % j != 0){
                    continue loop2
                }
                else {
                    continue loop1
                }
            }
            
            args.push(arguments[i])
            
        }
    }

    return args
  
}


console.log(findAndReturnPrimeNumbers(2, 5, 6, 7, 9, 21, 23))

function friendlyNumbers(num1, num2){

    let flag1 = 0;
    let flag2 = 0;

    for (let i = 1; i < num1; i++){
        if (num1 % i == 0){
            flag1 += i
        }
    }

    for (let j = 1; j < num1; j++){
        if (num2 % j == 0){
            flag2 += j
        }
    }

    if(flag1 == num2 && flag2 == num1){
        return "These are friendly numbers"
    }
    else{
        return "These are not friendly numbers"
    }


}

console.log(friendlyNumbers(220, 284))


function findAndReturnPerfectNumbersTill1000(){

    let flag = 0
    let args = []

    // 0 and negative numbers are not considered
    for (let i = 1; i <= 1000; i++){

        for (let j = 1; j < i; j++){
            if (i % j == 0){
                flag += j
            }
        }

        if(flag == i){
            args.push(i)
        }

        flag = 0
    
    }

    return args
}

console.log(findAndReturnPerfectNumbersTill1000())


function findAndReturnPrimeNumbersTill1000(){

    let args = []

    loop1:
    for (let i = 2; i <= 1000; i++){

        if(i == 2){
            args.push(i)
        }

        loop2:
        for (let j = 2; j < i; ++j){
            if (i % j != 0){
                continue loop2
            }
            else {
                continue loop1
            }
        }
        
        args.push(i)
    
    }

    return args
}


console.log(findAndReturnPrimeNumbersTill1000())


function findMinNumNotInArr(arr) {

    let isEveryElementNegativeOrZero = arr.every((i) => i <= 0)

    if(isEveryElementNegativeOrZero == true){
        return 1
    }

    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] >= 0){
            if(arr[i] == arr[i+1] || arr[i] + 1 == arr[i+1]){
                continue
            }
            return arr[i] + 1
        }
        
    }
    
    return arr[arr.length] + 1
}

console.log(findMinNumNotInArr([1, 2, 3]))



function findTwoTimesRepeatedChars(str){

    let twoTimesOccuredChars = []
    
    for (let i = 0; i < str.length; i++) {

        const regex = new RegExp(str.charAt(i), 'g');
        if (str.match(regex).length == 2 && !twoTimesOccuredChars.includes(str.charAt(i))) {
            twoTimesOccuredChars.push(str.charAt(i))
        }
    }

    return twoTimesOccuredChars

}

console.log(findTwoTimesRepeatedChars("lazarbeambetobt, 5 ydfgsdfsfasljg"))


function findTwoTimesRepeatedChars2(str){

    let arr = str.split('')
    let twoTimesRepeatedChars = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        arr.forEach(x => x == arr[i] ? count++ : null)
        if(count == 2 && !twoTimesRepeatedChars.includes(arr[i])){
            twoTimesRepeatedChars.push(arr[i])
        }
    }

    return twoTimesRepeatedChars
}

console.log(findTwoTimesRepeatedChars2("lazarbeambetobt, 5 ydfgsdfsfasljg"))

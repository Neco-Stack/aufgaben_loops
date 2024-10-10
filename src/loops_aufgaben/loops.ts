for (let i: number = 1; i<=10; i++){
    console.log("Hello World" + i);
}
let numbersToTen: number[] = [];
for (let i: number = 0; i <= 10; i++){
    numbersToTen.push(i);
    console.log(numbersToTen);
}
const friendNames: string [] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (let i: number = 0; i < friendNames.length; i++){
    console.log(friendNames[i]);
}
for (const singleNames of friendNames){
    console.log(singleNames);
}
const friendAges: number [] = [20,22,34,55,66];
console.log(friendAges);
for (const friendSingleAge of friendAges){
    console.log(friendSingleAge);
}
let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
console.log(words);

// loops-ts-level-1_9

function calculateSum(maxNumber: number): number {
    let sum : number = 0;
    for (let i: number = 1; i <= maxNumber; i++){
        sum += i;
    }
    return sum;
}
console.log(calculateSum(5));

function getHighestNumber(numbers: number[]): number {
    let highestNumber: number = numbers[0]; 
    for (let i: number = 1; i < numbers.length; i++){
        if(numbers[i]> highestNumber){
            highestNumber = numbers[i]
        }
    }
    return highestNumber
}
console.log(getHighestNumber([1,5,66,77,456,4]));










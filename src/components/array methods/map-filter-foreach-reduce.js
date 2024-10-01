//foreach
const numbers =[1,2,34,5]
numbers.forEach((ele,index,array){
    console.log('element',ele)
    console.log('index',index)
    console.log('array',array)
})

// using foreach we can sum up the elemets

let sum=0
numbers.forEach((ele){
    sum+=ele
})
console.log('element',ele)

// using foreach we can modify the elemets

const numbers =[1,2,34,5]
const squares = []
numbers.forEach((num){
    square.push(num*num)
})
console.log(numbers)
console.log(squares)


//MAP
const numbers =[1,2,34,5]
const new = numbers.map((num,idx) {
    return num*10*idx//use return other wise it return undefine

})
console.log(new)

//using map to change strings to uppercase

const words = ["apple","banana"]
const convertedWords = words.map((word) {
    return word.toUpperCase()
})
console.log(convertedWords)

//FILTER
const numbers =[1,2,34,5]
const even = numbers.filter((num){
    return num%2===0
})
console.log(even)
//filtering female

const gender = ["male","female"]
const femaleArr = gender.filter((gen){
    return gen === "female"
})
console.log(femaleArr);


//using filter to remove falsly values
const mixedArr = [0,1,"apple",null,""]
const truthyValues = mixedArr.filter((value){
    return Boolean(value)
})
console.log(truthyValues)


//reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  

console.log(sum);  


 // using filter finding frq of each ele

 const fruits = ["apple","banana","goa"]
 const fruitCount = fruits.reduce(acc,current){
    if(acc[current]){
        acc[current]+=1

    }else{
        acc[current]=1
    }
    return acc
 },{})

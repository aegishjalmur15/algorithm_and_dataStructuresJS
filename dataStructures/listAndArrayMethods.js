//! The difference between Lists and arrays is that 
//? arrays are used to store elements of the same data
//? and list are used to store different types of elements
//*  arrays is this => [ 's', 't', 'r', 'i', 'n', 'g' ]; and list is this => [1, 'john', {key: 'item'}]
//? array and list count start on 0

//* how to create an array: 
let array = ['josh','chloe','joma','akita'];
//* access a value of an array using the index:
array[3];
//* Will return 'akita'

//* change the value of an item on determinate index:

array[0] = 'diego';
//* will change the value 'josh' for 'diego'

//* using the spread operator:

let newArray = [...array];
//* Will copy the values of array into the newArray

//! Properties:
//* getting the length:

array.length;
//* will return the value 4

//* the code below make you able to change or add prototypes, but this is not a good practice
array.prototype

//! Methods:

//? Array.from() you can only pass objects array-like (objects with length property or indexed elements)
//* or objects who you cant colect they elements, like map or set.
//* Array.from(array-like, mapfn, thisArg).

Array.from('string');
//* Will return [ 's', 't', 'r', 'i', 'n', 'g' ]

Array.from([4,2,5], item => item + item);
//* Will return [8,4,10].

Array.from({length: 5}, (v,k)=> k)
//*will return [ 0, 1, 2, 3, 4 ]

//? Array.isArray(obj)
//* this Method return true of false if the object passed is or not an array

Array.isArray('string');
//* Will return false

//? Array.of(elements...)
//* this method return an array of the elements passed, different of Array(number)
//* who create a Array with the legth  = number of elements
Array.of(19);
//* Will return [19]
Array.of(19,20,40);
//* Will return [19,20,40]
Array(9);
//* Will return [ <9 empty items> ]

//? Array.concat(nElements)
//* this method concatenates the passed element to with the array
//* this method dont change the array itself
let arrayToConcat = [1,2,3,4];
let arrayToConcat1 = ['a', 'b', 'c'];

arrayToConcat.concat(arrayToConcat1);
//* Will return [1,2,3,4,'a', 'b', 'c']

//? Array.entries()
//* return a new object Array Interator with the keys and values pairs for each array index

let keysAndValues = ['a', 'b', 'c'].entries();

for (let e of keysAndValues) {
    //*console.log(e);
}
//* will log:   [ 0, 'a' ]
           //*  [ 1, 'b' ]
           // * [ 2, 'c' ]

//? Array.every(cb,[,thisArg])
//* this method receive a function and of all elements of array return true in the function the return is true
//* if not, the return is false

[1,2,3,4,5,7,10].every(e=> e > 1)
//* will return false because we have one number who isn't greater than 1

//? Array.fill(value, init, end)
//* the method fill the indexes in some range (init, end) with the static value passed in

// [1,2,3,4].fill(3,0,1)
//* will return [3,2,3,4]

//? Array.filter(cb[,thisArg])
//* this method creates a new array containing the elements who passed the test (cb)

let oddNumbers = [1,2,3,4,5,6,7,8,9,10].filter(item => item % 2 !== 0)

//* will return [ 1, 3, 5, 7, 9 ]

//? Array.find(cb(element[,index[,array])[,thisArg])
//* this method return the value of the first element who passed the test provided

let students = [
    { name:'maria', age:14},
    { name:'akita', age:18},
    { name:'diego', age:16},
    { name:'deschamps', age:14},
];
students.find(element => element.age === 14);
//* Will return { name:'maria', age:14}

//? Array.findIndex(cb)
//* this method return the index of the first element who passed the teste provided
//* otherwise return -1, who indicate that no one passed the teste

let students1 = [
    { name:'carlos', age:14},
    { name:'akita', age:18},
    { name:'denise', age:16},
    { name:'amanda', age:14},
];

students1.findIndex(element => element.age >= 18);
//* will return 1

//? Array.flat(depth)
//* this method return a new Array with all the sub-elements concatenated according the depth

let messArray = [1,2,[3,[4]]];
messArray.flat(3);
//* return [1,2,3,4]

//? Array.map(cb)
//* this method run a function to each element of the array and return a new array with the result

const oldArray = [4,9,16,25,36,49];
let sqrtOfOldArray = oldArray.map(element => Math.sqrt(element));
//* sqrtOfOldArray = [ 2, 3, 4, 5, 6, 7 ]


//? Array.flatMap(cb(currentValue[, index[, array]]))
//* this method return a flat array after a maping function

let normalArray = [1,2,3,4,5,6,7,8,9,10];

normalArray.flatMap(element => [element*2]);
//* will return [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

//? Array.forEach(cb(currentValue [, index [, array]])[, thisArg])
//* this method execute a function for each element in the array
                //todo console.log({element: element, index: idx} 
normalArray.forEach((element,idx) => 'the code above');
//*will return :
/*{ element: 1, index: 0 }
{ element: 2, index: 1 }
{ element: 3, index: 2 }
{ element: 4, index: 3 }
{ element: 5, index: 4 }
{ element: 6, index: 5 }
{ element: 7, index: 6 }
{ element: 8, index: 7 }
{ element: 9, index: 8 }
{ element: 10, index: 9 }*/

//? Array.includes(searchElement[, FromIndex])
//* this method return true or false depending if find the element 
//*passed int the array range started from the index 0 (default) or from custom index

normalArray.includes(3,1);
//* will return true

//? Array.indexOf(searchElement, [initial_point = 0])
//* this method return the first index of the element searched in the ranged passed, if not exist return -10

normalArray.indexOf(6,3);
//* will return 5

//? Array.join([separator=','])
//* this method joi all the elements of an array in a string using the separator
[ 's', 't', 'r', 'i', 'n', 'g' ].join('');
//* will return "string"

//? Array.keys()
//* this method returns a new array interator with all the keys for all the array indexes

let arrayOfKeys = [ ...normalArray.keys()];
//* arrayOfKeys = [0,1,2,3,4,5,6,7,8,9]

//? Array.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
//* this method will return the last index of an element in array, the method searches backwards

let arr = [1,2,4,5,6,1,8,9];
arr.lastIndexOf(1);
//* this method will return 5

//? Array.pop()
//* remove the last element from the array and return it

let removedIntem =[1,2,3,4].pop();
//* removedIntem = 4

//? array.push()
//* push a new element into the array and return the length

let normalArray1 = [...normalArray];
let newLength = normalArray1.push('new Element');

//* normalArray1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'new Element' ] and the newLength = 10

//? Array.reduce(cb(accumulator, currentValue[,index,array])[,initial value])
//* this method execute a callback function for each element into an array and the return is stored
//* on accumulator until the last run of the function where the final return is the accumulator as well
//* if the initial value is not passed, the accumulator start from the index 0 and the currentValue from the 1

let arrayWithMaxValue = [1,3,2,100,50,30,300,20];

let maxValue = arrayWithMaxValue.reduce((acc,actV)=>{
    if(actV > acc){
        return actV
    }
    else{
        return acc
    }
});
//* maxValue will be 300

//? Array.reduceRight(cb(accumulator, currentValue[,index,array])[,initial value])
//* is the same as reduce but all backwards

//? Array.reverse()
//* as the name say... reverse an array, the first element is become the last and the last element become the first

[ 's', 't', 'r', 'i', 'n', 'g' ].reverse();
//* this will return [ 'g', 'n', 'i', 'r', 't', 's' ]

//? Array.shift()
//* removes the first element from an array and returns it

let normalArray2 = [...normalArray];
let firtsElementRemoved = normalArray2.shift();

//* firtsElementRemoved will be 1 and normalArray2 will be  [ 2, 3, 4, 5, 6, 7, 8, 9, 10]

//? Array.slice([start[,end]])
//* this method returns a copy of a range between the 'start' and the 'end' of an array

let arrayCopySlice = normalArray.slice(3,8);

//* arrayCopySlice will be [ 4, 5, 6, 7, 8 ]

//? Array.some(cb)
//* this method test if at least one element passes the test

[1,2,3,4].some(e=> e < 2);
//*will return true

//? Array.sort([compareFunction])
//* this method returns an array based on the compare function, 
//* if the compare function isn't provided the sort will use the unicode code point

let sortedArray = arrayWithMaxValue.sort((a,b)=>{
    return a-b
});
//* sortedArray will be ➤ node listsAndArrays.js[ 1,  2,   3,  20, 30, 50, 100, 300 ]

//? Array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
//* this method will delete items in list based on the range specified (or not specified) and add new item into the list

let namesToNotModifyTheOriginalArray = [...array];

namesToNotModifyTheOriginalArray.splice(0,2,'deschamps','diego');

//* namesToNotModifyTheOriginalArray will be [ 'deschamps', 'diego', 'joma', 'akita' ]

//? Array.toLocaleString()
//* this method will transform the elements into a string using they respective methods to transform into a string

let date = new Date();
let newArray2 = [normalArray, namesToNotModifyTheOriginalArray, date];

let result = newArray2.toLocaleString()
//* result will be '1,2,3,4,5,6,7,8,9,10,deschamps,diego,joma,akita,24/12/2020 03:27:46' 
//*(obviosly this date is my current so will be differente when you run)

//? Array.toString()
//* this method concat all the elements into one string

namesToNotModifyTheOriginalArray.toString();
//* will return 'deschamps,diego,joma,akita'

//? Array.unshift([element1[, ...[, elementN]]])
//* this method add one or more elements to the beginning of the array and return the new length

let array3 = [...namesToNotModifyTheOriginalArray];
array3.unshift('josh','chloe');
//* array3 will be [ 'josh', 'chloe', 'deschamps', 'diego', 'joma', 'akita' ]

//? Array.values()
//* this method returns a array interator with all the values of an array

let arr3Values = array3.values();
for(let names of arr3Values) {
    //todo console.log(names)
}
//* will log:
//* josh
//* chloe
//* deschamps
//* diego
//* joma
//* akita

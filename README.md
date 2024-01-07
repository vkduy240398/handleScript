```javascript
// combind array
import {compareDate, reverseString, money, combinedArray, compareObject} from 'handleScript'
const arrays = [
    {
        id: 1,
        name: 'test 1'
    },
     {
        id: 1,
        name: 'test 2'
    },
     {
        id: 1,
        name: 'test 3'
    },
     {
        id: 2,
        name: 'test 4'
    },
    {
        id: 2,
        name: 'test 5'
    }
]
const results = combinedArray(arrays , 'id');
console.log(results)
/// compares date
const current = '2024/01/12' // Format YYYY/MM/DD || YYYY/M/D || YYYY-MM-DD || YYYY-M-D
const start = '2024/01/12'// Format YYYY/MM/DD || YYYY/M/D || YYYY-MM-DD || YYYY-M-D
const end = '2024/01/12'// Format YYYY/MM/DD || YYYY/M/D || YYYY-MM-DD || YYYY-M-D
const result = compareDate(current, start, end); // return boolean
// Format money
const results = money(2000000) // => 2,000,000
// reverse String
const ex1 = reverseString('HELLO') // => OLLEH
const ex2 = reverseString('HELLO', "-") // => O-L-L-E-H
const ex3 = reverseString('2024-01-12', "-") // => 12-01-2024
// Compare object
// object origin: original array
// object: Array to compare  
const objectOrigin = {
    id: 1,
    name: 'duy',
    age: 25,
    year: 2024,
};
const object = {
    id: 2,
    name: 'duy 2',
    age: 24,
    year: 2024
};
console.log(compareObject(objectOrigin, object)); // return The value is different between the object to be compared and the object to be compared (trả về giá trị khác nhau giữa đối tượng cần so sánh và đối tượng so sánh: objectOrigin)
`````` 
```javascript
// combind array
import {compareDate, reverseString, money, combinedArray} from 'handleScript'
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
`````` 
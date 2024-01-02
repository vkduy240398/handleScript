```javascript
// combind array
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
const results = combindArray(arrays , 'id');
console.log(results)
/// compares date
const current = '2024/01/12'
const start = '2024/01/12'
const end = '2024/01/12'
const result = compareDate(current, start, end); // return boolean
// Format money
const results = monney(2000000) // => 2,000,000

/* filter implementation */
function filterFunction(arr, func) {
    let res = [];
    arr.map((item, index) => {
        if (func(item, index, arr)) {
            res.push(item);
        }
    })
    return res;
}

console.log(filterFunction([1,2,3,4,5,6], item => item % 2 === 0)); //[2,4,6]
console.log(filterFunction(["red", "blue", "black", "purple"], item => item.length > 4));; //['black, purple]
console.log(filterFunction(["A", "B", "C"], (item, ind, arr)=>{
    arr.push('new');
    return item < "C";
})); //[A,B]




/* find implementation */
console.log('\n\n');
function findImplementation(arr, func) {
    let output;
    for (let i = 0; i < arr.length; i++) {
        output = func(arr[i], i, arr);
        if (output) {
           return arr[i];
           
        }
    }
}
let arr1 = [1,2,3,4,5,6];
console.log(findImplementation(arr1, item => item % 2 === 0)); //2
console.log(findImplementation(arr1, (item, ind) => {
    if (item === 5) {
        return ind;
    }
})); //5




// /* slice implementation */
console.log('\n\n');
function sliceImplementation(arr, start, end) {
    let res = [];

    if (!start) {
        start = 0;
    }
    if (!end) {
        end = arr.length;
    }
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
   
    
    for (let i = start; i < end; i++) {
        res.push(arr[i]);
    }
    console.log(res);
}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
sliceImplementation(animals, 2);        // ['camel', 'duck', 'elephant']
sliceImplementation(animals, 2, 4);     // ['camel', 'duck']
sliceImplementation(animals, 1, 5);     // ['bison', 'camel', 'duck', 'elephant']
sliceImplementation(animals, 0, 3);     // ['ant', 'bison', 'camel']
sliceImplementation(animals, -2);       // ['duck', 'elephant']
sliceImplementation(animals, 2, -1);    // ['camel', 'duck']
sliceImplementation(animals);           // ['ant', 'bison', 'camel', 'duck', 'elephant']




/* splice implementation */
console.log('\n\n');
function spliceImplementation(arr, start, howmany, ...items) {
    let res = [];

    if (typeof howmany === 'undefined' ) {
        howmany = arr.length - start;
    }
    if (!items) {
        items = [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (i < start) {
            res.push(arr[i]);
        }
        else if (howmany === 0) {
            if (i === start) {
                res.push(...items, arr[i]);
            }else {
                res.push(arr[i]);
            }
        }else if (howmany > 0) {
            if (i === start) {
                res.push(...items);
            }else if (i < start + howmany) {
                continue;
            }else {
                res.push(arr[i]);
            }
        }
    }
    console.log(res);
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
spliceImplementation(fruits, 2, 0, "Lemon", "Kiwi"); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
spliceImplementation(fruits, 2, 2); //['Banana', 'Orange']
spliceImplementation(fruits, 2, 1, "Lemon", "Kiwi"); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']
spliceImplementation(fruits, 0, 0, "Lemon", "Kiwi"); //['Lemon', 'Kiwi', 'Banana', 'Orange', 'Apple', 'Mango']
spliceImplementation(fruits, 0, 2, "Lemon", "Kiwi"); //['Lemon', 'Kiwi', 'Apple', 'Mango']




/* some implementation */
console.log('\n\n');
function someImplementation(arr, func) {
    let res = false;
    arr.map((item, index) => {
        if (func(item, index, arr)) {
            res = true;
        }
    })
    console.log(res);
}
someImplementation([1,2,3,4,5,6], item => item > 4);
someImplementation([1,2,3,4,5,6], item => item < 0);


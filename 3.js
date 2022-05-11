function getLength(arr) {
    arr = arr.flat(Infinity);
    console.log(arr.length);
}

getLength([1, [2, 3]]);
getLength([1, [2, [3, 4]]]);
getLength([1, [2, [3, [4, [5, 6]]]]]);
 
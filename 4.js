
function numStr(arr) {
    let res = [];
    arr.filter((str, ind) => {
        [...str].map(char => {
            if (Number(char)) {
                res.push(str);
            }
        })
    })
    console.log(res);
}
numStr(["first1", "2second", "str", "3"]);
numStr(["first", "second", "third"]);
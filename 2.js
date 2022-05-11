
function recurIndex(str) {
    if (!str){
        console.log('{}');
        return;
    }

    let repeatedChars = [];
    let charInd;
    for (let i = 0; i < str.length; i++){

        charInd = repeatedChars.indexOf(str[i]);
        if (charInd == -1){
            repeatedChars.push(str[i]);
        }else{
            console.log(`{"${str[i]}":[${charInd},${i}]}`);
            break;
        }
        if (i === str.length-1){
            console.log('{}');
        }
    }
}

recurIndex("AREDCBSDERD");
recurIndex("ABCDefgh");
recurIndex("");
recurIndex("AREDCBSERD");
recurIndex(undefined);
recurIndex(null);
recurIndex("1234234");
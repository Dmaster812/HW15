// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr.length);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr.length);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    console.log(displayOccurrences(strArray1));
    console.log(displayOccurrences(numArray));
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}

// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){

    if (Array.isArray(src) && Array.isArray(dst) && (length >= 0) ) {

        // using spread syntax to flatten the array
            dst.splice(dstPos, 0, ... src.slice(srcPos, (srcPos+length)));
            return true;
    }

    return false;
}


// function count(array, str){
//
//     let count = 0;
//     if (Array.isArray(array)) {
//
//             array.forEach((item) => {if (item===str) count++});
//             return count;
//     }
//         return false;
// }

function count(array, str){

    let count = 0;

    if (Array.isArray(array)) {
        array.reduce((acc, item) => {
            if (item === str) count++;
        });

        return count;
    }

    else return false;
}

function displayOccurrences(array){

    if (Array.isArray(array)) {

            let nMap = new Map();
            array.reduce((acc, item) => (nMap.set(item, (nMap.get(item) || 0) + 1)));
            return nMap;
    }

    return false;
}

function ulSurround(strings){

    if (Array.isArray(strings)) {

            let a = ['<ul>','</ul>'];
                a.splice(1, 0, ...strings.map(value => {return `<li>${value}</li>`}, 0));
            return a;
    }

    return false;
}
function lengthSort(array){

    if (Array.isArray(array))
        return array.sort((a,b) => {return (a.length - b.length)},0);
    else
        return false;

}

console.log(count(strArray1, "ddd")); // expected 1
console.log(count(numArray,6)); // expected 3
console.log(count(numArray,-10)); // expected 0

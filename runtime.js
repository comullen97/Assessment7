const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given
// array? 982.1202ms for doublerAppend and 2.8614ms for doublerInsert. When I ran these first and only the extraLargeArray. When I ran all array sizes in the same node runtime.js, the time variables changed. 

// Try it with first function
console.log('Results for doublerInsert:');
console.log('Array Size | Executive Time');

perf.start();
doublerAppend(tinyArray);
console.log('tinyArray |', perf.stop().preciseWords); //81.1µs

perf.start();
doublerAppend(smallArray);
console.log('smallArray |', perf.stop().preciseWords); //15.8µs

perf.start();
doublerAppend(mediumArray);
console.log('mediumArray |', perf.stop().preciseWords); //39.5µs

perf.start();
doublerAppend(largeArray);
console.log('largeArray |', perf.stop().preciseWords); //465.3µs

perf.start();
doublerAppend(extraLargeArray);
console.log('extraLargeArray |', perf.stop().preciseWords); //2.7673ms


// Try it with second function
console.log('Results for doublerInsert:');
console.log('Array Size | Execution Time');

perf.start();
doublerInsert(tinyArray);
console.log('tinyArray |', perf.stop().preciseWords); //60µs

perf.start();
doublerInsert(smallArray);
console.log('smallArray |', perf.stop().preciseWords); //18.7µs

perf.start();
doublerInsert(mediumArray);
console.log('mediumArray |', perf.stop().preciseWords); //149.1µs

perf.start();
doublerInsert(largeArray);
console.log('largeArray |', perf.stop().preciseWords); //8.7963ms


perf.start();
doublerInsert(extraLargeArray);
console.log('extraLargeArray |', perf.stop().preciseWords); //1.0051923 s

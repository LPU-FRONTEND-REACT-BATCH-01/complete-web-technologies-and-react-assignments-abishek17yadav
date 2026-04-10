


let arr= [10,9,8,1,4,6];
// let arr1= ["z","b","a","c"];

// arr1.sort();
// console.log(arr1)


arr.sort((a,b)=>{
    return a-b;
});
console.log(arr)

let arr2 = [1, 2, 3, 4];

// let result = arr2.filter(function(x) {
//   return x > 2;
// });

let result = arr2.filter((ele)=> ele>2)

console.log(result);





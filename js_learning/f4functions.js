function print(){
    console.log("happy birthday");
}

// function sum(n1,n2, n3){
//     return n1+n2+n3;
// }
// const s = sum(5, 8, 1);
// console.log(s);

const sum = function(n1,n2,n3){
    return n1+n2+n3;
}
const s = sum(5, 8, 1);
console.log(s);


// const sum =(n1,n2,n3)=>{
//     return n1+n2+n3;
// }
// const s = sum(5, 8, 1);
// console.log(s);


// const isEven = function(num){
// return num%2 == 0;
// }
const isEven = num => num%2 == 0;
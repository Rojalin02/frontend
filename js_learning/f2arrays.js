let fruits=["apple" , "mango", "litchi"];
console.log(fruits[1]);
let mixed =["string", 1, 3, 5, null, undefined];
console.log(mixed);
// console.log(typeof fruits); we get fruits as object if we run this
console.log(Array.isArray(fruits));

fruits.push("orange");
console.log(fruits);
let popfruit = fruits.pop();
console.log(fruits);
console.log("popped fruit is " +popfruit);


fruits.unshift("banana");
fruits.unshift("avacado");
console.log(fruits);

// primitive and reference data types
let arr1 =["item1", "item2"];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push("item3");
console.log(arr1);
console.log(arr2);
// changes are present in both arr1 and arr2. if we want to change only one then we have to define it separately or else the stack pointer points to the same location in memory.


// to clone array:method 1
let arr3 = arr1.slice(0);
console.log("array3 is:" +arr3);
//method 2 
let arr4 = [].concat(arr1);
console.log("array4 is:" +arr4);
// method 3: spread operator
let arr5 = [...arr1];
console.log("array5 is:" +arr5);

const vegs =["tomato", "potato", "chilli"];
for(let veg of vegs){
    console.log(veg);
}

for(let index in vegs){
    console.log(index);
    console.log(vegs[index]);
}

// array destructuring
let [v1, v2, v3]= vegs;
v1 = "brinjal";
console.log(v1);

let arri = ["i1", "i2", "i3", "i4", "i5", "i6"];
let [k1,,k3,...arrk]= arri;
console.log("k1=" +k1);
console.log("k3=" +k3);
console.log(arrk);
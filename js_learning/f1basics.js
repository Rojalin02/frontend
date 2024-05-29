"use strict";
console.log('hello world');

var firstName = 'Rosalin';
console.log(firstName);
firstName = 'Satyajit';
console.log(firstName);

const pi=3.14;

let secName = 'bandana';
console.log(secName.length);
console.log(secName[secName.length-1]);


let tName = '       kiara     ';
console.log(tName.length);
let tn= tName.trim();
console.log(tn.length);
console.log(tn.toUpperCase());


let fName = 'Siddharth';
let fn = fName.slice(4,9);
let fm = fName.slice(3);
console.log(fn);
console.log(fm);


let age= 35;
console.log(typeof age);
// convert number to string
console.log(typeof(age+" "));
// convert string to number
let salary = +"334";
console.log(typeof salary);

// template string 
console.log("my name is " +fName +" and my age is "+ age);
let aboutMe = `my name is ${fName} and my age is ${age}`;
console.log(aboutMe);

let num1 =19;
let num2 = 19;
console.log(num1<num2);
// == checks the value only not the data type
console.log(num1 == num2);
let num3= "19";
console.log(num3 === num2);

// only value not data type
console.log(num1 != num2);
// both value and data type
console.log(num1 !== num2);
 

let age01 = 19;
if(age>18){
    console.log("user can play ddlc");
}
// falsy values:
// null, false, 0, undefined, " "



let age02 = 8;
// let drink;
// if(age>=5){
//     drink = "milk";
// }
// else{
//     drink = "coffee";
// }
let drink = age>=5 ? "coffee" : "milk";
console.log(drink);


let day=0;
switch(day){
    case 0: console.log("sunday"); break;
    case 1: console.log("monday"); break;
    case 2: console.log("tuesday"); break;
    case 3: console.log("wednesday"); break;
    case 4: console.log("thursday"); break;
    case 5: console.log("friday"); break;
    case 6: console.log("saturday"); break;
    default: console.log("invalid day"); break;
} 

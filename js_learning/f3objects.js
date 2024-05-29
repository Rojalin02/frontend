// objects are reference type

const person = {name:"rosalin", age:22, hobbies:["guitar", "playing", "sleeping"]};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

person.gender = "female";
console.log(person);

for(let key in person){
    console.log(key);
    console.log(person[key]);
}
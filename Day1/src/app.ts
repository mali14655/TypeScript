
// let myName:string="Muhammad Ali";

// console.log(myName);

// let userId:number=10.5;

// if(Number.isInteger(userId)){
//     console.log(userId)
// }
// else{
//     console.log("Float value")
// }



// what typescript does

// 1 prevent us from making type erros(static checking)
let value:string="ali"
// value = 20

// or 
function add(num1:number,num2:number):number{
    let sum:number=num1+num2;

    return "sum";
}

add("ali","ali");



// 2 some logical error checking oor preventing redundancy

// type inference(typescript is smart enough to understand or detec the type by itself)
let char=Math.random()<0.5?"a":"b";

if(char!=="a"){
    console.log(char)
}else if (char==="b"){
    // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap
    console.log("hello this is b")
}

// 3 some syntax errors
let myName="ali";
console.log(myName.tolowercase())


// 4 non-exeptions erros(which does not htrow exceptions or does not stop the exeution but return a value undefined,null or NaN);

const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined in js




// Practice

function greetPerson(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
// greetPerson("Maddison", Date()); string
greetPerson("Maddison", new Date()); // Date type

// Date() returns same value as new Date() but in string




// strictness

let xyz:number=null;  //no check and is assignable
let xyza:number=undefined;  //no check and is assignable

// a and b has any type but is not catched by typescript in not strict mode
 function addd(a,b){
    return a+b;
 }

 addd(5,"ali");


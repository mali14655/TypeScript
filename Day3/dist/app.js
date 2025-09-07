"use strict";
// unknown and any
let abc;
abc = "abc";
let myName = "Muhammad Ali";
let value = myName;
let myNewName = "xyz";
// let newValue:string=myNewName; // this is wrong as type is not checked.
let newValue;
// now this will work as we are checking the type first
if (typeof myNewName === "string") {
    newValue = myNewName;
}
// this will aslo show error as type checked and the type of newValue is not matching
if (typeof myNewName === "boolean") {
    // newValue=myNewName // here it will show squiggly lines indicating error
}

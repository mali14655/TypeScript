


// null
// without flag on

// let value:number=null;
// let value2:any=null;

// // ALLOWED
// console.log(value.toFixed(2));
// console.log(value2.toUpperCase());


// // undefined


// let valueA:number=undefined;
// let valueB:any=undefined;

// // ALLOWED
// console.log(valueA.toFixed(2));
// console.log(valueB.toUpperCase());



// with Flag on

// 1
// let myValue=null;
// let myNewValue=undefined;

// console.log(myValue.toUpperCase())
// console.log(myNewValue.toUpperCase())



// 2
// let checkNull: string | null=null;
// //  for dynamcivalue
let checkNull:string|null=Math.random()>0.5?"hello":null;

// will start yealling without check
// console.log(checkNull.toLocaleLowerCase())

// non-null assertion operator(!)
// removing null and undefined from a type without doing any explicit checking.
console.log(checkNull!.toLocaleLowerCase())

if (checkNull == null) {
    console.log(checkNull)
} else if (typeof checkNull === "string") {
    // ✅ checkNull is string here
    console.log(checkNull.toUpperCase()); /// here the type it shows is never becasue this block is not reacheable in case of null value assigned
}
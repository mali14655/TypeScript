"use strict";
let checkUndefined = undefined;
// let numberValue:number=checkNull;
// let numberValue2:number=checkUndefined;
// let checkNull: string | null=null;
//  for dynamcivalue
let checkNull = Math.random() > 0.5 ? "hello" : null;
if (checkNull == null) {
    console.log(checkNull);
}
else if (typeof checkNull === "string") {
    // ✅ checkNull is string here
    console.log(checkNull.toUpperCase()); /// here the type it shows is never becasue this block is not reacheable in case of null value assigned
}
// console.log(checkUndefined)

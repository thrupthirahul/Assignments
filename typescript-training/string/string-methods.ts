let nm:string ="Rahul Thrupthi123...";
console.log(nm.length);
console.log(nm.toUpperCase());
console.log(nm.toLowerCase());
console.log(nm.match(/[A-Za-z]/g));
console.log(nm.replace(/[^0-9.]/g, ""));

let arr:string[]=[...nm];
for(const a of arr){
    console.log(a);
}
//console.log(id);
console.log('Hello,World!');
console.log('Hello');
console.error('error');

let name='Rahul';
let id;
console.log(name);
console.log(id);

id =101;
console.log(id);

let x=10;
let y="10";
console.log("x:" + x);

console.log('!=',x != y);
console.log('!==',x !== y);

let obj={
    id:10,
    name:"Rahul"
};

delete obj.id;
delete obj.name;
console.log(obj);


let emp={
    id:101,
    name:"Rahul",
    m1: function(){
        console.log("Emp Function.");
        console.log(id + name);
        return 10;
    }
};

console.log(emp);
console.log(emp.m1());

let set= new Set();
set.add(1);
set.add(2);
set.add(1);
set.add("1");

for(const s of set){
    //console.log( typeof s);
    if( typeof s ==="number"){
        console.log(s);
    }
}

console.log(set);
let p= new Promise((reslove,reject)=>{
    console.log("Hello Promise P.");
     setTimeout(() => reslove("Hello TypeScript"), 20000);
 });

let p1WithoutSetTimeout= new Promise((reslove,reject)=>{
    console.log('Hello TypeScript 2.0v Promise p1');
    reslove('Hello TypeScript 3.0v Promise 1');
});

let p2WithoutSetTimeout= new Promise((reslove,reject)=>{
    console.log('Hello TypeScript 2.0v Promise p2');
    reslove('Hello TypeScript 3.0v Promise p2');
});

async function start(){
 console.log('inner start function start.');   
// console.log(  await p1WithoutSetTimeout);
console.log(p);
 console.log('inner start function start 2.');   
 console.log('inner start function start 3.');   
 console.log('inner start function start 4.');   
 //console.log( await p2WithoutSetTimeout);
 console.log(p);
 console.log('inner start function start 5');
 console.log('inner start function start 6');      
 console.log('inner start fuction end.');
}
async function end(){
 console.log('inner end function start.');   
 //console.log(  await p1WithoutSetTimeout);
 console.log('inner end function start 2.');   
 console.log('inner end function start 3.');   
 console.log('inner end function start 4.');   
// console.log( await p2WithoutSetTimeout);
 console.log('inner end function start 5');
 console.log('inner end function start 6');      
 console.log('inner end fuction end.');
}
console.log('start 1');
console.log('start 2');
console.log('start 3');
//console.log( await p);
//console.log(pWithoutSetTimeout);
start();
//end();
console.log('start 5');
console.log('start 6');
console.log('start 7');
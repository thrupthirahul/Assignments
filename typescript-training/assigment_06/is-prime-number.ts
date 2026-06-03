const num:number=7;

function isPrime(n:number):boolean{

    if(n <= 1){
        return false;
    }

    for(let i=2; i<=n ; i++){        
        if((n%i === 0 ) && (i !== n)) {
            return false;
        }
    }
    return true;
}

if(isPrime(num)){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}

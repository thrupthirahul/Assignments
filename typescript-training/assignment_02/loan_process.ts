
interface Person{

    customerName: string,
    creditScore:number,
    income:number,
    isEmployed:boolean,
    debtToIncomeRatio: number
}

let customer:Person= {
    customerName: "John Doe",
    creditScore: 720,
    income:50000.00,
    isEmployed: true,
    debtToIncomeRatio: 35.0
}


let loanProcess=function(p:Person): void{
    
    if(p.creditScore >750){
        console.log("Loan automatically approved.");
    }
    else if(p.creditScore >=650 && p.creditScore <=750 ){
        
        if(p.income < 50000){
            console.log("Loan reject due to low income (Less than $50,000).");
        }else if(!p.isEmployed){
            console.log("Loan denied due to UnEmployment.");
        }else if (p.debtToIncomeRatio >= 40){
            console.log("Loan denied due to high DebtToIncomeRatio.");
        }else{
            console.log("Loan is approved.");
        }
    }
    else {
        console.log("loan denied.");
    }
    
}

loanProcess(customer);

//Create a number[] to store the transcation detail for the customer.
let customerTranscation: number[] = [50000,-2000,3000,-15000 ,-200, -300,4000, -3000];


let creditAndDebitTranscationFullDetails = function(customer: number[]): number[]{
    let creditCount:number=0;
    let debitCount:number=0;
    let totalCreditAmount:number=0;
    let totalDebitAmount:number=0;
    let suspiciousCredit:number =0;
    let suspiciousDebit:number=0;

    for(let i=0; i<customer.length; i++){
        
        if(customer[i]!>0){
            
            //If any transaction limit exceeds + 10000 then print the message “Suspicious credit.
            if(customer[i]!>=10000){
                console.log(`Suspicious credit Transaction with Amount: ${customer[i]}`);
                suspiciousCredit++;
            }

            creditCount++;
            totalCreditAmount +=customer[i]!;
        }
        else{
            //If any transaction limit exceeds - 10000 then print the message “Suspicious debit.
            if(customer[i]! <=-10000){
                 console.log(`Suspicious debit Transaction with Amount: ${customer[i]}`);
                 suspiciousDebit++;
                }
                debitCount++;
                totalDebitAmount -=customer[i]!;
            }
    }

    //total amount remaining at the end in Bank Account
    let balanceAmountInAccount= totalCreditAmount-(totalDebitAmount);

    //Print total number of credit and debit transactions completed
    console.log(`total number of credit transactions completed: ${creditCount}`);   
    console.log(`total number of debit transactions completed: ${debitCount}`);
    
    //Print the total amount credited and debited in account
    console.log(`total number of credit in account: ${totalCreditAmount}`);   
    console.log(`total number of debit in account: ${totalDebitAmount}`);

    //Print total number of suspicious transactions
    console.log(`total number of suspicious transactions: ${suspiciousCredit+suspiciousDebit}`);   


    //Print total amount remaining at the end in Bank Account
    console.log(`total amount remaining at the end in Bank Account: ${balanceAmountInAccount}`);

    return [creditCount,debitCount,totalCreditAmount, totalDebitAmount,suspiciousCredit,suspiciousDebit, balanceAmountInAccount];
} 

creditAndDebitTranscationFullDetails(customerTranscation);


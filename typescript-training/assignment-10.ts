let price:number[] =[7,1,5,3,6,4];
let nextWeekPrice:number[] = [7,6,4,3,1];
function sellAndBuyStockWithInAWeek(p:number[]): number{
    let maxProfit:number=0;

    for(let i:number =0; i<p.length-1;i++){
        for(let j:number =i+1; j<p.length; j++){    

            if(p[j]!-p[i]! >=maxProfit){
                maxProfit=p[j]!-p[i]!;
            }

        }
    }
    return maxProfit;
}

let maxProfitWithInWeek=sellAndBuyStockWithInAWeek(price);
console.log(`Maxmium Profit With IN The Week: ${maxProfitWithInWeek}`);

let nextWeekMaxProfit=sellAndBuyStockWithInAWeek(nextWeekPrice);
console.log(`Maxmium Profit In The Next Week: ${nextWeekMaxProfit}`);
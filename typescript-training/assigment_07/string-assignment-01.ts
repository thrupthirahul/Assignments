let sentence:string = "Java programming is fun and challenging";

function transformation(str: string): (number | string)[]{
    
    //Count the total number of words in the sentence.
    let numberOfWords:number=0;
    
    //Print the sentence words in reverse order.
    let wordsInReverseOrder:string ="";
    
    //Convert the first character of each word to uppercase and print original sentence
    let firstCharacterToBeUppercase:string ="";

    let strSplit:string[] =str.split(/ /g);
    
    numberOfWords=strSplit.length;

    for(const s of strSplit){
        wordsInReverseOrder = s+" "+(wordsInReverseOrder); 
    }

    for(const s of strSplit){
        //firstCharacterToBeUppercase += (strSplit[i]!.charAt(0).toUpperCase() + (strSplit[i]!.substring(1, strSplit[i]!.length)))+" ";
        firstCharacterToBeUppercase += (s.substring(0,1).toUpperCase()+s.substring(1))+" ";
    }

    console.log(`Number of Words: ${numberOfWords}`);
    console.log(`Words In Reverse: ${wordsInReverseOrder=wordsInReverseOrder.trim()}`);
    console.log(`First Character To Be UpperCase: ${firstCharacterToBeUppercase=firstCharacterToBeUppercase.trim()}`);


 return [numberOfWords, wordsInReverseOrder, firstCharacterToBeUppercase];
}

console.log(transformation(sentence));



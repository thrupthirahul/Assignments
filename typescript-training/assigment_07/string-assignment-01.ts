
let sentence:string = "Java programming is fun and challenging";


//Count the total number of words in the sentence.
//Print the sentence words in reverse order.
//Convert the first character of each word to uppercase and print original sentence

function transformation(str: string): (number | string)[]{
    let numberOfWords:number=0;
    let wordsInReverseOrder:string ="";
    let firstCharacterToBeUppercase:string ="";

    let strSplit:string[] =str.split(/ /g);
    numberOfWords=strSplit.length;

    for(let i=numberOfWords-1; i>=0 ; i--){
        wordsInReverseOrder += strSplit[i]+" ";
    }

    for(let i=0; i<numberOfWords ; i++){
        firstCharacterToBeUppercase += (strSplit[i]!.charAt(0).toUpperCase() + (strSplit[i]!.substring(1, strSplit[i]!.length)))+" ";
    }

    console.log(`Number of Words: ${numberOfWords}`);
    console.log(`Words In Reverse: ${wordsInReverseOrder=wordsInReverseOrder.trim()}`);
    console.log(`First Character To Be UpperCase: ${firstCharacterToBeUppercase=firstCharacterToBeUppercase.trim()}`);


 return [numberOfWords, wordsInReverseOrder, firstCharacterToBeUppercase];
}

console.log(transformation(sentence));



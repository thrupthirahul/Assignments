let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

//Find the total numbers of occurences.
//Print count and indexes of the word.

function totalCountAndItsIndexes(str:string, searchStr:string){
    let numberOfOccurences:number=0;
    let indexes:number[]=[];
    let splitStr=str.split(/ /g);
    
    let postionIndex=0;
    for(let i=0; i<splitStr.length; i++){

        if(splitStr[i] === searchStr){
            numberOfOccurences++;
            indexes.push(postionIndex+(postionIndex=str.slice(postionIndex).indexOf(searchStr)));
            postionIndex +=searchStr.length;
        }  
    }
    console.log(`Number Of Occurences: ${numberOfOccurences}`);
    console.log(`Indexes: ${indexes}`);

   // return [numberOfOccurences, indexes];
}

totalCountAndItsIndexes(paragraph, "Java");


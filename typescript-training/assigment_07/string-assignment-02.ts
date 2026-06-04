let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

function totalCountAndItsIndexes(str:string, searchStr:string):[number, number[]]{
    //Find the total numbers of occurences.
    let numberOfOccurences:number=0;
    
    //Print count and indexes of the word.
    let indexes:number[]=[];
    
    let splitStr=str.split(/[ .,]/g).filter(Boolean);
    //console.log(splitStr.filter(Boolean));

    //hoding prevoius search string position
    let postionIndex=0;
    for(let i=0; i<splitStr.length; i++){

        if(splitStr[i]?.toLowerCase() === searchStr.toLowerCase()){
            numberOfOccurences++;
            indexes.push(postionIndex+(postionIndex=str.slice(postionIndex).indexOf(searchStr)));
            postionIndex +=searchStr.length;
        }  
    }
    console.log(`Number Of Occurences: ${numberOfOccurences}`);
    console.log(`Indexes: ${indexes}`);

   return [numberOfOccurences, indexes];
}

totalCountAndItsIndexes(paragraph, "development");


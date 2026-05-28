//Create string[] to store lists of studentName.
let studentNames:string[] =["Suresh","Mahesh","Naresh"];

//Create number[] store lists of marks for every student.
let studentMarks:number[] =[75,80,82];

let details=function studentMarksDetails(names: string[] , marks : number[]):void{

//Add 10 marks for every student and store in another number[]
let finalMarks:number[] =[];

//get info from studentMarks[] and add 10 marks to every student and store them into finalMarks[].
for(let i=0 ; i<names.length; i++){
    finalMarks[i] = marks[i]! + 10;
}

//find average marks 
let averageMarks: number=0;

console.log("Updated Marks:");
for(let i=0; i<finalMarks.length; i++){
    console.log(`${names[i]}: ${finalMarks[i]}`);
    averageMarks +=finalMarks[i]!;
    
}

//calculate average marks
averageMarks = averageMarks/finalMarks.length;

console.log(`AverageMarks: ${averageMarks}`);

}


details(studentNames, studentMarks);

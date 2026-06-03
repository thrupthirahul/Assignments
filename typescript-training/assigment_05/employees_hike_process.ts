//Define Type to store all employees details within the map collection.
interface Employee{
    name: string,
    baseSalary:number,
    experience: number,
    yearEndRating: number,
    hikePercetageValue?:number
}

// 1 Alice Johnson 75000.0 5.1 4.2
let employee1:Employee={
    name: "Alice Johnson",
    baseSalary: 75000.0,
    experience: 5.1,
    yearEndRating: 4.2
}
// 2 Bob Smith 68000.0 3.2 3.8
let employee2:Employee={
    name: "Bob Smith",
    baseSalary: 68000.0,
    experience: 3.2,
    yearEndRating: 3.8
}
// 3 Carol Davis 82000.0 7.1 4.5
let employee3:Employee={
    name: "Carol Davis",
    baseSalary: 82000.0,
    experience: 7.1,
    yearEndRating:  4.5
}
// 4 David Brown 90000.0 10.2 2.5
let employee4:Employee={
    name: "David Brown",
    baseSalary: 90000.0,
    experience: 10.2,
    yearEndRating:  2.5
}
// 5 Eva Green 60000.0 2.4 3.5
let employee5:Employee={
    name: "Eva Green",
    baseSalary:  60000.0,
    experience: 2.4,
    yearEndRating:  3.5
}
//Create Map collections to store the all employees details
let employeeDetails= new Map<number,Employee>();
//store the all 5 employee details with in the map collection.
employeeDetails.set(1,employee1);
employeeDetails.set(2,employee2);
employeeDetails.set(3,employee3);
employeeDetails.set(4,employee4);
employeeDetails.set(5,employee5);

let hikeProcess=function(e:Map<number, Employee>): Map<number, Employee>{

    for(let [key, employee] of e){

        const variablePayPercentageIsRatingGreatherThanFour=15;
        const variablePayPercentageIsRatingGreatherThanEqualThreeAndLessThanFour=10;
        const variablePayPercentageIsRatingLessThanThree=3;
        
        const bonusIfRatingGreatherThanFour=1500;
        const bonusIfRatingGreatherThanEqualThreeAndLessThanFour=1200;
        const bonusIfRatingLessThanThree=300;
        
        const reward=5000;

        const basicSalaryBeforeHike:number =employee.baseSalary;

        //Rating >=4.0 then ( Base Salary * variable pay % ) + Bonus
        if(employee.yearEndRating >=4){
            employee.baseSalary = (employee.baseSalary*variablePayPercentageIsRatingGreatherThanFour) + bonusIfRatingGreatherThanFour;
        }
        else if (employee.yearEndRating >=3 && employee.yearEndRating <4){
            employee.baseSalary = (employee.baseSalary*variablePayPercentageIsRatingGreatherThanEqualThreeAndLessThanFour) + bonusIfRatingGreatherThanEqualThreeAndLessThanFour;
        }else{
            employee.baseSalary =(employee.baseSalary*variablePayPercentageIsRatingLessThanThree) + bonusIfRatingLessThanThree;
        }

       // Employees with Experience >= 5 Years get extra Reward of 5000;
        if(employee.experience >=5){
            employee.baseSalary +=reward; 
        }

        employee.hikePercetageValue= employee.baseSalary/basicSalaryBeforeHike;
    }
    return e;
}

//console.log(hikeProcess(employeeDetails));

let hikeProcessCompleted:Map<number,Employee> =hikeProcess(employeeDetails);

console.log("Name           |HikePercentageValue");
for(let [id, detail] of hikeProcessCompleted){
    console.log(`${detail.name}   |${Number(detail.hikePercetageValue).toFixed(2)}`);
}




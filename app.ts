//Function in Typescript with user defined data type
function add(a:number , b:number):number
{
    return a + b;
}

//BY type inference feature the data type is any and can be assigned any type of value whether boolean 
//number or string  
let data;
data = true;
data ="Hello";
data = 45;

//We can make numbers as data type and then can only take that specific number as value
let data2:5;
data2 = 5;

//The data type of let is selected according to the value assigned to it but const makes the value assigned as 
//its data type and couldn't be changed
let data3 = 6; //number
const val = 5; // 5

//Object type 
type objtype = {name:string , city: string};

const user:objtype=
{
    name : "Ali",
    city : "London"
}
console.log(user.name);

const employee:objtype=
{
    name : "Usman",
    city : "Paris"
}

console.log(employee.name);

//Array
let data4:string[] = ["Clothes","Grocery","Cosmetics"];
console.log(data4);

//Using Push command for array
data4.push("Utensils");
console.log(data4);

//instead
let data6:any[] = ["color",54,true];
//or
let data7 = ["color",54,true];

//OR to define data type separately (Not preferred)
//                  TUPLE
let data5:[string,number,boolean] =["Color",54,true]; // Specify the type of separate element

//Enum
enum Role{
    HOD,Director,Rector
}

console.warn(Role.HOD); //output : 0

//Union in Typescript

function combine(a:number | string , b:number | string)
{
    if(typeof a === "string" && typeof b === "string")
    {
        return a+b;
    } 
    if(typeof a === "number" && typeof b === "number")
    {
        return a+b;
    }    
}

console.log(combine(1,2));
console.log(combine("a","b"));

//What if we have too many parameters and we want to handle all of them but can not write if condition for all
//of them like above
//                             Literal Type
function combine3(a:number | string , b:number | string ,type:"any_number"|"any_string")
{
    if(type === "any_number")
    {
        return (+a)+(+b);
    } 
    if(type === "any_string")
    {
        return a.toString() + b.toString();
    }    
}

console.log(combine3(1,2,"any_number"));
console.log(combine3("a","b","any_string"));

//There is repetition in the type defined in argument of above function
//                          Type Alias

type vartype = number | string; //type Alias

function combine4(a:vartype , b:vartype,type:"any_number"|"any_string")
{
    if(type === "any_number")
    {
        return (+a)+(+b);
    } 
    if(type === "any_string")
    {
        return a.toString() + b.toString();
    }    
}

console.log(combine4(1,2,"any_number"));
console.log(combine4("a","b","any_string"));

//Use of any : can generate errors sometimes 

function combine2(a:any, b:any)
{
    return a+b;    
}

console.log(combine2(1,2));
console.log(combine2("a","b"));

//Return type

function typo (a:number , b:number):string //return type is string
{
    return a.toString()+b.toString();
}
console.log(typo(1,2));

//Void return type 

let today ;

function calculateDate()
{
    today = new Date();
}
calculateDate();
console.log(today);

//unknown type is more beneficial than any type because any switches off the main type checking property of ts
let data8 : unknown;
data8 = 8;
data8 = "hello";

let target: string;
if(typeof data8 === "string")
{
    target = data8; //string
}

//in case of any 

let data9 : any;
data9 = 8;
data9 = "hello";

let target2: number;

target = data9; //Now the target instead of being number has changed into string data type and any has spoiled the
//type restrictions needed
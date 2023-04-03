var line1="Hello";
var line2="World";
console.log(line1+" "+line2);

var a=(1>8)? "Hello": "world"
console.log(a)
//number to string
var y=10;
//hexadecimal
y=y.toString(16);
console.log(y);
console.log(typeof(y));
y=3.32424;
y=y.toPrecision(2);
console.log(y);
var z="10";
console.log(z);
console.log(parseInt(z));
var str1="Hello \"world";
console.log(str1);
console.log(str1.length);
console.log(str1.charAt(1));
console.log(str1.toUpperCase());

console.log(str1.trim(1));
console.log(str1.slice(2,-1)); 
console.log(str1.substring(3,5));
console.log(str1.replace("H","SW"));
//Array
var numbers=[];
numbers.push(12);
numbers.push(13);

numbers.push(14);
numbers.push(15);

numbers.push(16);

numbers.push(17);
numbers.push(18);
console.log(numbers);
var splt="Bangladesh"
splt=splt.split("")
console.log(splt);
//concat,join,tostring,sort,reverse cAN USE IN ARRAY

//Object
student={Name:"Sakib",Age: 27,Village:"Sakhipur"};
console.log(student);
student.occu="Student";
console.log(student);
delete student.occu;
console.log(student)
//functon
function saySomething(name){
    console.log(`Hello ${name}`);
}
saySomething("Sakib");
//2nd type
let sayPlease=function(name2){
    console.log(`Hey you are ${name2} right?`);
}
sayPlease("sara");

//3rd type arrow function (Lots of use in react js ,node js)

let doneSaying=()=>{
    console.log("I am arrow function");
}
doneSaying();
//forEACH

var fooods=["Cake","Ice Cream","Chocolates","Bread"];
var numbeeers=[1,2,3,4,3234,42,212,33444,1,23,4,2];

//1st parameter=item,2nd parameter=index,3rd parameter=whole array


let printEverything=function(item,i,abc){
    console.log(`Index ${i} and Item is : ${item}`);
    console.log(abc);
}
fooods.forEach(printEverything);
console.log(fooods);
//mapping

function addSomethingi(itm){
    return `${itm} is a food`;
}

let arrStore=fooods.map(addSomethingi);
console.log(arrStore);

//objectmethod
let person={firstName: "Fazle",lastName:"Rahat",dob:"9-8-1999",

            fullName:function(){
                return `${this.firstName } ${this.lastName}`
            }
        }
        console.log(person.dob);
        console.log(person.fullName())

let val;
val=Math.PI;
console.log(val);
val=Math.E;
console.log(val);
val=Math.round(3.1);
console.log(val);
val =Math.ceil(1.1);
console.log(val);
//Date object;
let today=new Date();
console.log(today);

//class
class Person {
  constructor(fname, lname, age, birth) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.birthday = birth;
  }

  calculateAge() {
    let birthdayy = new Date(this.birthday);
    let diff = Date.now() - birthdayy.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

let person1 = new Person("Fazle", "Rahat", 23, "01-07-1999");
let person2 = new Person("amin", "ali", 24, "12-02-1987");
let person3 = new Person("Rashit", "tata", 29, "14-05-1991");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());
//subclass
class man{
    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;
    }
    greeting(){
        return `Hello ${this.firstname} ${this.lastname}`
    }
}

class Customer extends man{
    constructor(fname,lname,phone,memberShip){
        super(fname,lname);
        this.phone=phone;
        this.memberShip=memberShip;
    }
}

 let man1=new man("Fazle"," Rahat");
console.log(man1);
console.log(man1.greeting());

let cst=new Customer("Rafiq","Ali","0193922933",1234);
console.log(cst);
console.log(cst.greeting());
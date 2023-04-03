//regular Expression is a pattern matching technique

let re;
let string;
re=/hello/i;//case insensitive
console.log(re);
str="Hello world"; 
//exec() - returns result in an arraay if matches otherwise null 
let res=re.exec(str);
//test ()--true/false
res=re.test(str);

//match - return array or null
res=str.match(re);


//return index of the first match -1
res=str.search(re);
//replace return new string 
let newString= str.replace(re,"hi");
console.log(newString);
console.log(res);



//Expression part 2
let re2;
let str2;
//literal charac
re2=/helLo saKib/i;
re2=/^hello/i;//must start with
re2=/hello$/i;//must end with
re2=/h.llo/i;//matches any one character
re2=/h*llo/i;//0 or more times character
re2=/he?l?lo/i;//optional e thakleo hobe na thakleo hobe onno kisu thakle hobe na
re2=/hello\?/i;//escaping
//meta characters
str2="Hello? SakIB two"
//console.log(re2.exec(str2));
function reTest(re2,str2){
    if(re2.test(str2)){
       // console.log(`${str2} matches ${re2.source}`);
    }else{
       // console.log(`${str2} doesnt matches ${re2.source}`);
    }
}

reTest(re2,str2);


//expression part 3 character sets, Quantifier and Grouping
//character set using Brackets[]

let re3;
re3=/h[ea]llo/i; //must be one of them inside brackets
re3=/h[^ea]llo/i; //anything except those
let str3="hallo";
console.log(re3.exec(str3));
function reTest(re3,str3){
    if(re3.test(str3)){
        console.log(`${str3} matches ${re3.source}`);
    }else{
        console.log(`${str3} doesnt matches ${re3.source}`);
    }
}

reTest(re3,str3);

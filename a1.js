// ans 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// ans 2
if('10' === 10){
    console.log("Both our equal");
}
else{
    console.log("10" === 10); 
    const newnumb = Number('10');
    console.log(newnumb === 10); 
}
// ans 3
const base = 5;
const height = 10;
if (base <= 0 || height <= 0) {
    console.log("Base and height must be positive numbers.");
}
else{
    let area= 0.5 * base * height;
    console.log(`The area of the triangle is:` + area);
}
// ans 4
let target_date=new Date(2024,11,25);
let today = new Date();
console.log(target_date);
console.log(today);
let differenceInDays = (target_date-today) / (1000 * 60 * 60 * 24);
console.log(`Days left: `+ Math.ceil(differenceInDays));
// ans 5
// ans 6
const side = 5;
if (side <= 0) {
    console.log("Side must be a positive number.");
}
else{
    let cir= 4 * side;
    console.log(`The circumference of the Square is:` + cir);
}
//ans 7
let no_days=365;
let no_years=1; 
console.log(no_days+" days is equals to "+no_days/365+ " years");
console.log(no_years+" years is equals to "+no_years*365+ " days");
// ans 8
let fe = 100; 
let ce = (fe - 32) * 5/9;
console.log(fe+" Fahrenheit to "+ce+" Celsius");
// ans 9
function extension(filename) {
const lastdot = filename.lastIndexOf('.');

    if (lastdot === -1) return ''; 
    return filename.substring(lastdot + 1);
}
const file = "example.txt";
console.log(extension(file));
//  ans 10
//  ans 11
//  ans 12
//  ans 13
let numb=123;
if(numb>0){
    console.log(numb+ " is positive");
}
else if(numb<0){
    console.log(numb+ " is negative");
}
else{
    console.log("Enterd value is zero");
}
// ans 14
let char='A';    
const vowels = "AaEeIiOoUu";
if(vowels.includes(char)){
    console.log("It's a vowel");
}else{console.log("It's not a vowel");}
// ans 15
let numb15=123;
if(numb15>0){
    console.log(numb15+ " is positive");
}
else if(numb15<0){
    console.log(numb15+ " is negative");
}
else{
    console.log("Enterd value is zero");
}
// ans 16
let numb16=0;
numb16==0?console.log("Zero"):numb16%2==0?console.log("Even"):console.log("odd");
// ans 17
let a17=20;
let b17=48;
let c17=311;
a17>b17 && a17>c17 ?console.log(a17+" is maximum."):
b17>a17 && b17>c17?console.log(b17+" is maximum."):
console.log(c17+" is miximum");
// ans 18
let a18=20;
let b18=48;
let c18=11;
a18<b18 && a18<c18 ?console.log(a18+" is minimum."):
b18<a18 && b18<c18?console.log(b18+" is minimum."):
console.log(c18+" is minimum");
// ans 19
let a19=20;
let b19=48;
let c19=311;
a19>b19 && a19>c19 ?console.log(a19+" is maximum."):
b19>a19 && b19>c19?console.log(b19+" is maximum."):
console.log(c19+" is miximum");

// ans 20
function weekdays(dayno){
    let day;
    switch (dayno) {
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;                
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        case 7:
            day="Sunday";
            break;     
        default:
            day="Invalid number";
            break;
    }
    return day;
}
console.log(weekdays(8));
// ans 21
// ans 22
for(i=972;i>=897;i--){
    console.log(i);
}
// ans 23
let numb22=4;
let numb22Factorial=1;
for(i=1;i<=numb22;i++){
    numb22Factorial=numb22Factorial*i;
}
console.log(numb22Factorial);
// ans 24
function fibonacciseries(n) {
    let n1 = 0, n2 = 1, next, series;
    if(n==0){
        console.log("Please, enter a number.");
    }
    else{
        for (let i = 1; i <= n; i++) {
            if(i==1){
                series=n1;
            }else{
                series=series+', '+n1;
            }
            next = n1 + n2;
            n1 = n2;
            n2 = next;    
        }
        console.log("The Fibonacci series is: "+series);
    }
}
fibonacciseries(10);
// ans 25
let numb25=64728;
numb25string=numb25.toString();
let newnumb25=numb25string.split('');
newnumb25=newnumb25.reverse();
newnumb25=newnumb25.join('');
let reversednumb25=parseInt(newnumb25);
console.log(reversednumb25);
// ans 26
let numb26=1012340;
let ans26=0;
numb26string=numb26.toString();
numb26string=numb26string.split('');
for(i=0;i<numb26string.length;i++){
    ans26+=parseInt(numb26string[i]);
}
console.log(ans26); 
// ans 27
let numb27=123;
numb27string=numb27.toString();
numb27string=numb27string.split('');
let ans27=parseInt(numb27string[0])+parseInt(numb27string[numb27string.length-1]);
console.log(ans27);
// ans 28
for(i=1;i<=5;i++){
    p=i;
    for(j=0;j<4;j++){
        a=i**j;
        p=p+" "+a;
    }
    console.log(p+"\n");
}
// ans 29
    // 1
    for(i=1;i<=5;i++){
        p="";
        for(j=1;j<=i;j++){
            if((j%2)!=0){
                p=p+" "+1;
            }else{
                p=p+" "+0;
            }
        }
        console.log(p+"\n");
    }
    // 2       
    data="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    k=0;
    for(i=1;i<=5;i++){
        p="";
        for(j=1;j<=i;j++){
                a1=data.charAt(k);
                k++;
                p=p+" "+a1;
        }
        console.log(p+"\n");
    }
    // 3
    a1=0;
    for(i=1;i<=5;i++){
        p="";
        for(j=1;j<=i;j++){
                a1=a1+1;
                p=p+" "+a1;
        }
        console.log(p+"\n");
    }
    // 4
    for(i=1;i<=5;i++){
        a=0;
        p="";
        for(j=1;j<=i;j++){
                a="*";
                p=p+" "+a;
        }
        console.log(p+"\n");
    } 
// ans 30
    function palindrome(num) {
        let str = num.toString();
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    let count = 1;
    let numbers = [];

    while (count < 4) {
        let input = prompt("Enter a number:");
        let number = parseInt(input);

        if (!isNaN(number)) {
            numbers.push(number);
            count++;
        } else {
            alert("Please enter a valid number");
        }
    }

    numbers.forEach(number => {
        if (palindrome(number)) {
            console.log(number + " is a palindrome.");
        } else {
            console.log(number + " is not a palindrome.");
        }
    });
// ans 31
    const today31=new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today_day=days[today31.getDay()];

    let hours = today31.getHours();
    let minutes = today31.getMinutes();
    let seconds = today31.getSeconds();
    let period = today31 >= 12 ? "PM" : "AM";
    let currentTime = hours+period+`:`+minutes+`:`+seconds;

    console.log(`Today is `+today_day+`.Current Time is `+currentTime);
// ans 32
        let today32 = new Date();
        let date32 = today32.getDate();
        let month32 = today32.getMonth() + 1;
        let year32 = today32.getFullYear();
        console.log(date32+'/'+month32+'/'+year32);
// ans 33
    function object_match(obj1, obj2) {
        if (typeof(obj1) === 'object' && obj1 != null && typeof(obj2) === 'object' && obj2 != null) {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {

                return "Objects are not equal, not having the same number of keys,";
            }
            
            for (let key in obj1) {
                if (!obj2.hasOwnProperty(key) || !object_match(obj1[key], obj2[key])) {
                    return "Objects are not equal, not having the same values of keys,";
                }
            }
            return "Objects are equal";
        } else {
            if(obj1 === obj2){
                return "Both are equal";
            }else{
                return "Both are not equal";
            }
            
        }
    }
    const object1 = { name: "Smit", age: 24 };
    const object2 = { name: "Smit", age: 24 };
    console.log(object_match(object1, object2));
// ans 34
    function arrayToCSV(arr) {
        const csvRows = [];

        const headers = Object.keys(arr[0]);
        csvRows.push(headers.join(','));

        for (const row of arr) {
            const values = headers.map(header => {
                const escaped = ('' + row[header]).replace(/"/g, '\\"');
                return `"${escaped}"`;
            });
            csvRows.push(values.join(','));
        }

        return csvRows.join('\n');
    }

    const data34 = [
        { name: "Smit1", age: 24, city: "Bhavnagar" },
        { name: "Smit2", age: 25, city: "Ahmedabad" }
    ];

    const csvString = arrayToCSV(data34);
    console.log(csvString);
// ans 35
    let string35 = "smit vyas";
    let first_letter=string35.charAt(0).toUpperCase();
    let string_without_first=string35.slice(1);
    stringnew35 = first_letter + string_without_first;
    console.log(stringnew35); 
// ans 36 to ans 44
// ans 45
    let array45 = [1, 2, 3];
    let string45 = "Hello world";
    console.log(Array.isArray(array45));
    console.log(Array.isArray(string45));
// ans 46
    let array46 = [1, 2, 3, 4];
    let clone_array46 = array46.slice();
    console.log(clone_array46);
// ans 47
// ans 48
    let string48 = "Smit vyas";
    console.log(string48.length);
// ans 49
    let string49 = "smit vyas";
    console.log(string49.toUpperCase());
// ans 50
// ans 51
    let date51 = new Date();
    let day51 = ("0" + date51.getDate());
    let month51 = ("0" + (date51.getMonth() + 1));
    let year51 = date51.getFullYear();

    console.log('mm-dd-yyyy: '+ month51+'-'+day51+'-'+year51);
    console.log('mm/dd/yyyy: '+ month51+'/'+day51+'/'+year51);
    console.log('dd-mm-yyyy: '+ day51+'-'+month51+'-'+year51);
    console.log('dd/mm/yyyy: '+ day51+'/'+month51+'/'+year51);
// ans 52
    let string52 = "30 Days Of JavaScript";
    console.log(string52.indexOf('a'));
// ans 53
    console.log(string52.lastIndexOf('a'));
// ans 54
// ans 55
// ans 56
// ans 57
// ans 59
// ans 60
// ans 61
    let str61 = "30 Days of JavaScript";
    console.log(str61.split(" "));
// ans 62
    console.log(str61.includes("Script"));
// ans 63
    console.log(str61.toLowerCase());
// ans 64
    console.log(str61.charAt(15));
// ans 65
    let string65 = "30 Days of JavaScript";
    let copy = string65;
    console.log(copy);






    
    


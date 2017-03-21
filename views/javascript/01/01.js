/**
 * Created by Administrator on 2017/3/20.
 */
/*var time=22;
if(time<20)
{
    console.log("good day");
}
elae
{
    console.log("good evening");
}
  */


/*var time=12
if(time<10)
{
    console.log("good morning");
}
else if(time>=10&&time<20)
{
    console.log("good day");
}
else {
    console.log("good evening");
}
    */

/*
var student={
    name:"liangkai",
    age:21,
    friend:"liubing",
    car:0,
    id:10086,
    phoennumber:1568090,
    city:"weiyuan"

};
console.log(student.age);
console.log(student.name);
console.log(student.id);
*/

/*var num=1;
if(num===1)
{
    console.log("num is equal to 1")
}
    */

/*
var num=0;

if (
    num===1){
    console.log("num is equal to 1")   ;
}
else{
    console.log("num is not equal to 1,is"+num);
}
*/
/*var month=1;
if(month===1){
    console.log("january");
}
else if (month===2){
    console.log("feb");
}
else if (month===3){
    console.log("mar");
}
else {
    console.log("after")
}
    */

/*var d=new Date().getDay();
switch(d){
    case 0:
        x="今天是星期日";
        console.log(x);
        break;
    case 1:
        x="今天是星期1";
        console.log(x);
        break;
    case 2:
        x="今天是星期2";
        console.log(x);
        break;
    case 3:
        x="今天是星期3";
        console.log(x);
        break;
    case 4:
        x="今天是星期4";
        console.log(x);
        break;
    case 5:
        x="今天是星期5";
        console.log(x);
        break;
    case 6:
        x="今天是星期6";
        console.log(x);
        break;
}*/

/*var x=undefined;
var t=typeof x;
switch (t) {
    case"number":
        console.log("x is a number");
        break;
    case"string":
        console.log("x is a string");
        break;
    case"boolean":
        console.log("x is a boolean");
        break;
    case"abject":
        console.log("x is a abj");
        break;
    case"undefined":
        console.log("x is a undefined");
        break;
}*/
/*var x=0;
while (x<10)
{
    x++;
    console.log(x) ;
}*/
/*var a=1;
var b=1;
while (a<=100){
    b=b*a;
    console.log(a+"的阶乘是"+b) ;
    a++;
}

var i=0;
var k=0;
while (i<=100)
{
    k=i+k;
    i++;
}
console.log(k);
*/

/*var a=1;
var b=0;
while (a<=100)
{
    b=a+b;

    console.log(a+"的累加是"+b);
    a++;
}*/

/*for(var i=0;i<=10;i++){
    document.write(i);
console.log(i);
}

for(var k=1 ,b=0;k<=100;k++){
b=k+b;
}
console.log(b) ;*/
/*100以内奇偶之差*/
/*
var x=0;
var y=0;
var z=0;
for(var i=1;i<=100;i++){
    if(i%2==1)
    {
        x=x+i;
    }
    else {
        y=y+i;
    }
    z=x-y;
 console.log(z) ;
}*/
/*var x=0;
var y;
for(var i=1;i<=9;i++){
    for(var k=1;k<=9;k++) {
        y = i * k;
        console.log(i+"*"+k+"等于"+y);
        document.write(i+"*"+k+"等于"+y+"<br>");
    }
}

*/
//do while 循环 1-9


/*var x="",i=0;
do{
    x=x + "数字为 " + i + "<br>";
    i++;
}
while (i<=9);
document.write(x);


var k=0;
do {
    y = k;
    document.write(y);
    k++;
}
while (k<=9);

var person={
    name:'hujun',
    age:'22',
    haveboyfriend:false,
    city:'cd'

}*/

var string="abcdefg";
var a= Array;
a=string.split("");
a.reverse();
console.log(a) ;

var str = "abcdefg",
    result = "";
for(var i = str.length; i > 0; i--) {
    result += str.charAt(i - 1);
}
document.write(result + "<br>");

var number=[1,10,31,33,37,48,60,70,80];
var x=1;
var k=number.indexOf(x);
if(x==1){
    console.log(number.indexOf(1));
}
else if(x==10){
    console.log(number.indexOf(1));
}
else if(x==31){
    console.log(number.indexOf(1));
}
else if(x==33){
    console.log(number.indexOf(1));
}
else if(x==37){
    console.log(number.indexOf(1));
}
else if(x==48){
    console.log(number.indexOf(1));
}
else if(x==60){
    console.log(number.indexOf(1));
}
else if(x==70){
    console.log(number.indexOf(1));
}
else if(x==80){
    console.log(number.indexOf(1));
}
else {
    console.log("-1")
}
document.write( "<br>");

str = "abddaabcdeff";
str1 = str.replace(/(.).*\1/g,"$1");
document.write(str + "<br>");
document.write(str1+ "<br>");

var i,a,b,c;
for(i=100;i<1000;i++){
    a=parseInt(i/100);
    b=parseInt((i-a*100)/10);
    c=parseInt(i-a*100-b*10);
    if( a*a*a+b*b*b+c*c*c == i){
        document.write(i+"<br>");
    }
}
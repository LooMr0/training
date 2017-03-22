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
document.write(a + "<br>");

var number=[1,10,31,33,37,48,60,70,80];
var x=1;
var k=number.indexOf(x);
if(x==1){
    console.log(number.indexOf(1));
}
else if(x==10){
    console.log(number.indexOf(10));
}
else if(x==31){
    console.log(number.indexOf(31));
}
else if(x==33){
    console.log(number.indexOf(33));
}
else if(x==37){
    console.log(number.indexOf(37));
}
else if(x==48){
    console.log(number.indexOf(48));
}
else if(x==60){
    console.log(number.indexOf(60));
}
else if(x==70){
    console.log(number.indexOf(70));
}
else if(x==80){
    console.log(number.indexOf(80));
}
else {
    console.log("-1")
}
document.write( "<br>");

str = "abbcabcddeff";
str1 = str.replace("abbcabcddeff","abcdef");
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
/*
var i,
    a=0.0325,
    b;

for(i=100;i<=3000;i++){
    for(b=1;b<=10;b++){
        var k=i*a*b+i;
    }
    document.write(k+"是你投资"+b+"年"+i+"所得<br>")
}
*/
//存款
/*
for(x=1000;x<=10000;x++){
    for(y=10;y<=20;y++){
        var k=(1+0.0325)*y+x;
        Math.pow(x,y)
    }
    document.write(k+"<br>")
}*/
//两点距离
/*
var x1=prompt(),x2=prompt(),y1=prompt(),y2=prompt();
var k=Math.pow((x2-x1),2),t=Math.pow((y2-y1),2);
var q=Math.sqrt(k+t);
document.write(q) ;
*/
//三角形面积
/*
var x1=prompt(),y1=prompt(),x2=prompt(),y2=prompt(),x3=prompt(),y3=prompt();
var k1=Math.pow((x2-x1),2),t1=Math.pow((y2-y1),2);
var k2=Math.pow((x3-x1),2),t2=Math.pow((y3-y1),2);
var k3=Math.pow((x3-x2),2),t3=Math.pow((y3-y2),2);
var side1=Math.sqrt(k1+t1);
var side2=Math.sqrt(k2+t2);
var side3=Math.sqrt(k3+t3);
var s=(side1+side2+side3)/2;
var area1=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
var area=Math.round(area1);
document.write(s+"<br>");
document.write(area+"<br>");
*/
//日期 某月有几天
/*
var date=new Date(2010,2,0);
var b=date.getMonth();
document.write(b);
document.write("一共"+date.getDate()+"天");
*/
//求星期
/*
var Date=new Date;
var q=Date.getDay(),
    m=Date.getMonth(),
    y=Date.getFullYear();
document.write(m+"<br>");
    var j=parseInt(y/100),
    o=y%100;
var m1=parseInt(26*(m+1)/10);
  var  k1=parseInt(o/4),
    j1=parseInt(j/4);

var h1=(q+m1+o+k1+j1+5*j);
var h=h1%7;
document.write("今天是"+y+"年，"+m+"月，星期"+h+"<br>");
*/
//字符串 成绩求和
/*
var str=String("87,81,97,76,74,94,90,76,64,76");
var s=0;
var str1= str.split(",",10);
   document.write(str1+"<br>");
   for (i=0;i<=9;i++){
       var f=str1[i];
       var z=Number(f);
        s=z+s;

}
document.write(s/10);
*/
/*
var str=String("小明：87,阿红：81,阿黄：97,小朱：76,小狗：74,厂长：94,菲克：90,胖：76,小飞：64,阿珠：76");
var s=0;
var str1= str.split(",",10);
var str2= str.split(":",10);
document.write(str2+"<br>");
document.write(str1+"<br>");
for (i=0;i<=9;i++){
    var f=str1[i];
    var z=Number(f);
    s=z+s;

}
document.write(s/10);
*/

/*
 var array1=[1,2,3,4,5,6];
 var array2=["nice","to","meet","you"];
 for(var i=0;i<=6;i++){
     var a=array1[i];
     document.write(a+"<br>")
 }
 for(i=0;i<=6;i++){
     var b=array2[i];
     document.write(b+"<br>")
 }
*/

//斐波那契数列
/*
var array=[0,1];
for(i=0;i<=100;i++) {
    array.push(array[i] + array[i + 1])
}
console.log(array);
document.write(array+"<br>");
*/

   //
/*var m=498,n=1000;
  a=n%m;
   if(a==0){
       document.write(n);
   }
   else {
       a=m%a;
       if (a==0){
           document.write(a);
       }
       else {
           document.write(a);
       }

   }
   */
var n=prompt(),m=prompt();
var s=1;
for(i=0;i<m;i++){
    s*=n;
}
document.write(s);



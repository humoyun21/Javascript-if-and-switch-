/*let a = +prompt("please enter a ");
let b = +prompt("please enter b ");
let c = +prompt("please enter c ");
let musbat = 0;
let manfiy = 0;
if (a > 0) {
  musbat++;
} else {
  manfiy++;
}
if (b > 0) {
  musbat++;
} else {
  manfiy++;
}
if (c > 0) {
  musbat++;
} else {
  manfiy++;
}
console.log(`Musbatlar soni ${musbat} ta`);
console.log(`Musbatlar soni ${manfiy} ta`);
*/

///////////////////////

//1-masala
/*
let son = +prompt("Butun son kiriting ");
if (Number.isInteger(son)) {
  if (son + 1) {
    console.log(son);
  }
} else {
  console.log("siz kiritgan son butun emas");
}
*/

//2-masala
/*
let son = +prompt("Butun son kiriting ");
if (son > 0) {
  console.log((son += 1));
} else if (son < 0) {
  console.log((son -= 2));
} else {
  console.log((son = 10));
}
*/

//3-masala

/*
let a = 2;
let b = 2;
let c = 16;
let butunson = 0;
let irratsianal = 0;
if (a % 2 == 0) {
  butunson++;
} else {
  irratsianal++;
}
if (b % 2 == 0) {
  butunson++;
} else {
  irratsianal++;
}
if (c % 2 == 0) {
  butunson++;
} else {
  irratsianal++;
}
console.log(`butun sonlar ${butunson} ta`);
console.log(`irratsianal sonlar ${irratsianal} ta`);
*/

//4-masala

/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
if (Number.isInteger(a) && Number.isInteger(b)) {
  console.log(Math.max(a, b));
}
*/

//5-masala
/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
var numbers = [a, b];
var smallest = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log("Kichik son: " + smallest);
var index = 0;
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    index = i;
  }
}
console.log("Tartib raqami: " + (index + 1));
*/

//6-masal
/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
if (Number.isInteger(a) && Number.isInteger(b)) {
  console.log(Math.max(a, b));
  console.log(Math.min(a, b));
}
*/
//7-masala
/*
let A = +prompt("please enter a ");
let B = +prompt("please enter b");

if (A > B) {
  var son = A;
  A = B;
  B = son;
}

console.log("A = " + A);
console.log("B = " + B);
*/

//8-masala

/*
let A = +prompt("please enter a ");
let B = +prompt("please enter b");
var C;
var D;

if (A == B) {
  A = 0;
  B = 0;
  C = A + B;

  console.log(C);
} else {
  D = A + B;
  console.log(D);
}
*/

//9-masala

/*
let A = +prompt("please enter a ");
let B = +prompt("please enter b");
var C;
var D;

if (A == B) {
  A = 0;
  B = 0;
  C = A + B;

  console.log(C);
} else {
  console.log(Math.max(A, B));
}
*/

//10-masala

/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
let c = +prompt("please enter a ");
if (Number) {
  console.log(Math.min(a, b, c));
}
*/

//11-masal

/*
let a = +prompt("please enter a ");
let b = +prompt("please enter b");
let c = +prompt("please enter a ");
var d;
var h;
var y;
if (Number) {
  d = Math.max(a, b, c);
  h = Math.min(a, b, c);
  y = d - h;
  console.log(y);
}
*/

//12-masala

//13-masala

/*
let A = parseInt(prompt("A ni kiriting:"));
let B = parseInt(prompt("B ni kiriting:"));
let C = parseInt(prompt("C ni kiriting:"));

if (A <= B && B <= C) {
  console.log(A, B, C);
} else {
  console.log(C, B, A);
}
*/

//14-masala
/*
var A = Number(prompt("A ni kiriting:"));
var B = Number(prompt("B ni kiriting:"));
var C = Number(prompt("C ni kiriting:"));

if (A <= B && B <= C) {
  console.log(A, B, C);
} else if (A >= B && B >= C) {
  console.log(C, B, A);
} else if (A <= B && B >= C && A <= C) {
  console.log(A, C, B);
} else if (A >= B && B <= C && A <= C) {
  console.log(B, A, C);
} else if (A >= B && B <= C && A >= C) {
  console.log(B, C, A);
} else if (A <= B && B >= C && A >= C) {
  console.log(C, A, B);
}
*/
//16-masala
/*
let x= +prompt("please enter a ");
if (x<0) {
console.log(-x)    
}
if (0<x<2) {
    console.log(x*x)
}
if (x>2) {
    console.log(4)
}
*/

//switch

//1-masala
/*
let son = +prompt("Iltimos, son kiriting: ");
let baho = "";

switch (true) {
  case son >= 1 && son <= 5:
    switch (son) {
      case 1:
        baho = "yomon";
        break;
      case 2:
        baho = "qoniqarsiz";
        break;
      case 3:
        baho = "qoniqarli";
        break;
      case 4:
        baho = "yaxshi";
        break;
      case 5:
        baho = "a'lo";
        break;
    }
    console.log(baho);
    break;
  default:
    console.log("xato");
    break;
}
*/
//2-masal


let son = parseInt(prompt("Iltimos, oy raqamini kiriting: "));
let oy = "";

switch (son) {
  case 1:
    oy = "Yanvar";
    console.log(oy);
    break;
  case 2:
    oy = "fevral;";
    console.log(oy);
    break;
  case 3:
    oy = "mart";
    console.log(oy);
    break;
  case 4:
    oy = "aprel";
    console.log(oy);
    break;
  case 5:
    oy = "may";
    console.log(oy);
    break;
  case 6:
    oy = "iyun";
    console.log(oy);
    break;
  case 7:
    oy = "iyul";
    console.log(oy);
    break;
  case 8:
    oy = "avgust";
    console.log(oy);
    break;
  case 9:
    oy = "sentyabr";
    console.log(oy);
    break;
  case 10:
    oy = "oktyar";
    console.log(oy);
    break;
  case 11:
    oy = "noyabr";
    console.log(oy);
    break;
  case 12:
    oy = "dekabr";
    console.log(oy);
    break;
  default:
    console.log("xato");
    break;
}


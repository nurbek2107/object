// 13-misol

// function array(num){
//    return num.split("").reverse().map(Number);
// }
// let num = "12345"

// console.log(array(num));

// 14-misol

// function array(num) {
//   let sum = 0; 
//   let newArray = []; 

//   for (let i = 1; i <= num; i++) {
//     newArray.push(i); 
//   }
//   console.log(newArray); 
// }

// array(4);

// 15-misol

// function arr(arr1, arr2) {
//     return arr1.concat(arr2).reduce((sum, current) => sum + current, 0);
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(arr(arr1, arr2)); 


// 16-misol
// function func(arr) {
//     return Math.pow(Math.min(...arr), 4).toString();
// }

// let arr = [3, 7, 5, 4, 5];
// console.log(func(arr)); 


// 17-misol
// function teskari(string) {
//     return string.split('').reverse().join('');
// }

// const value = 'Salom';
// console.log(teskari(value)); 












































// 7-misol
// const student = {
// 	name : "David Rayy",
// 	sclass : "VI",
// 	rollno : 12 
// }
// for(let key in student){
//     console.log(student[key]);
// }
// 8-misol
// const student = {
// 	name : "David Rayy",
// 	class : "VI",
// 	rollno : 12 
// };
// delete student.rollno;
// console.log(student);
// 9-misol
// const student = {
// 	name : "David Rayy",
// 	sclass : "VI",
// 	rollno : 12 
// }
// const student2 = {
// 	name : "David Rayy",

// 	sclass : "VI",
// 	rollno : 12,
// 	age: 23,
// 	address: 'world'
// }
// function a(obj) {
//     return Object.keys(obj).length;                                                     
//   }
// console.log(a(student),a(student2)); 
//Object.keys ozi satrlarni sanab beradi
// 10-misol
// function Person(name, oylik, chiqim) {
//     this.name = name;
//     this.oylik = oylik;
//     this.chiqim = chiqim;
//     this.getMonthlyIncome = function() {
//       return this.oylik - this.chiqim;
//     };
//   }
//   const person1 = new Person('John', 1000, 200);
//   const person2 = new Person('Don', 900, 200);
//   const person3 = new Person('Rikki', 1500, 300);
//   const person4 = new Person('Jek', 800, 100);
//   const person5 = new Person('Adia', 500, 200);
//   const person6 = new Person('Adia', 700, 100);
//   const person7 = new Person('Bety', 500, 200);
//   const person8 = new Person('Gariy', 600, 200);
//   const person9 = new Person('Jon', 800, 200);
//   const person10 = new Person('Anton', 1200, 200);
//   const monthlyIncome1 = person1.getMonthlyIncome();
//   const monthlyIncome2 = person2.getMonthlyIncome();
//   const monthlyIncome3 = person3.getMonthlyIncome();
//   const monthlyIncome4 = person4.getMonthlyIncome();
//   const monthlyIncome5 = person5.getMonthlyIncome();
//   const monthlyIncome6 = person6.getMonthlyIncome();
//   const monthlyIncome7 = person7.getMonthlyIncome();
//   const monthlyIncome8 = person8.getMonthlyIncome();
//   const monthlyIncome9 = person9.getMonthlyIncome();
//   const monthlyIncome10 = person10.getMonthlyIncome();
//   console.log(`${person1.name}ning xarajatdan tashqari daromadi $${monthlyIncome1}`);
//   console.log(`${person2.name}ning xarajatdan tashqari daromadi $${monthlyIncome2}`);
//   console.log(`${person3.name}ning xarajatdan tashqari daromadi $${monthlyIncome3}`);
//   console.log(`${person4.name}ning xarajatdan tashqari daromadi $${monthlyIncome4}`);
//   console.log(`${person5.name}ning xarajatdan tashqari daromadi $${monthlyIncome5}`);
//   console.log(`${person6.name}ning xarajatdan tashqari daromadi $${monthlyIncome6}`);
//   console.log(`${person7.name}ning xarajatdan tashqari daromadi $${monthlyIncome7}`);
//   console.log(`${person8.name}ning xarajatdan tashqari daromadi $${monthlyIncome8}`);
//   console.log(`${person9.name}ning xarajatdan tashqari daromadi $${monthlyIncome9}`);
//   console.log(`${person10.name}ning xarajatdan tashqari daromadi $${monthlyIncome10}`);
// 11-misol
// const car = {
// 	rusumi: 'nexia 3',
// 	rangi: 'Mokry',
// 	start : function () {
//         console.log('vrum vrum');
//     },
//     drive: function() {
//         console.log('driving');
//     },
//     stop: function() {
//         console.log('stopping');
//     }
// }
// car.start(); 
// car.drive(); 
// car.stop();
// 12-misol
// const object = {}; 
// for (let i = 0; i <= 10; i++) {
//     object[i.toString()] = i;
// }

// console.log(object);



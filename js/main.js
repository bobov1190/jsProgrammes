// ===== 1 Вывод данных в консоль =====

// console.log('hello from js');


// ===== 1.1 Комментарии =====

// однострочные комменты ctrl + /

/*
    многострочные комменты
*/


// ===== 2 Переменные =====

// let userName = 'Mark'

// console.log(userName);


// ===== 2.1 Типы Переменных =====

// Новый стандарт ES6:
// let - переменная
// const - переменная

// Старый стандарт ES5:
// var - переменная

// let - может менять значение во время работы программы
// let password = '123';
// console.log(password);

// password = '111';
// console.log(password);

// const - не может менять значение

// const yearOfBirth = 2007;
// yearOfBirth = 1908; TypeError: Assignment to constant variable.

/* ------------------------------------- */

// let us, age;
// us = 'Baha';
// age = 26;


// const profession; 'const' declarations must be initialized.

// profession = 'Worker';


// var не рекомендуется для использования в коде


// ===== 2.2 Область Видимости ===== 

// Функциональная область видимости

// function sum() {
//     let sui = 'Hello';
//     console.log(sui);
// }

// console.log(sui) sui is not defined

// область видимости внутри блока кода
// Блок кода обьявляется {} скобками
// {
//     // Блочная область видимости
//     let userName = 'Bob';
//     console.log(userName)

//     // Функциональная область видимости
//     var someNumber = 23;
//     console.log(someNumber)
// }

// console.log(userName);
// console.log(someNumber);

// По умолчанию всегда тип переменной const
// Если мы его можем ещё менять , то let


// ===== 2.3 Типы данных ===== 


// let userName = "Level"; // Строка {Текст}
// let age = 30; // Число
// let isUpgraded = true; // Логическое значение true/false

// Динамическая типизация

// let someVar = 'Hello world'; // строка
// someVar = 54; // теперь число 
// someVar = true; // теперь true ))


// Плохой нейминг

// let u = 'Oleg'

// Хороший нейминг

// let userName = 'Oleg'

// значение null
// <ничего> , <пусто> или <значение неизвестно>

// let age = 32;

// age = null;

// Значение undefined
// Означает что значение не было присвоено

// let userName; // undefined

//Если хотим обнулить переменную, то null

// let age = 32;

// age = null;

// Объекты
// Массивы

// Оператор typeof

// const someVar = 'hello';
// console.log(typeof someVar); // тип переменной

// BigInt

// console.log(Number.MAX_SAFE_INTEGER);

// // Если мы хотим работать с большими числами то добавляем n в конце

// console.log(983194832952935823959238592385n) // BigInt


// Symbol

// это уникальное примитивное значение
// позволяет добавлять уникальное свойство к объекту




// ===== 3 Операторы сравнения и условия  ===== 


/* 
операторы сравнения:
>, <, >=, <= - больше , меньше и тд
== - нестрогое сравнение
=== - строгое сравнение
!= - нестрогое неравенство
!== - строгое неравенство
*/

// console.log('5' == 5); // true 
// console.log('5' === 5); // false

// операция присвоения всегда возвращает true 
// 
// let number = 5

// if( number = 10 ) {
//     console.log('Возвращается это значение ');
// }


// Блок условий

// const time = 10;

// if(time < 12) {
//     console.log('Доброе утро')
// }else if (time > 12) {
//     console.log('Добрый день')
// }else {
//     console.log('Добрый вечер')
// }

/* 
&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
*/

// ===== 4 Тернарный оператор  ===== 

// if(10 < 12) {
//     console.log('Доброе утро')
// }else {
//     console.log('Добрый вечер')
// }

// (Условие) ? (Условие верно) : (Условие неверно)

// 10 < 12 ? console.log('Условие верно') : console.log('Условие неверно'); // Тернарное условие


// Можно сразу присваивать ответ к переменной

// let greeting = 10 < 12 ? console.log('Условие верно') : console.log('Условие неверно'); // Тернарное условие


// ===== 5 Конкатенация строк и добавление строки  ===== 

// let greeting = 'Hello. ';
// let howAreYou = 'How are you ?';

// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// const userName = 'Mark';
// console.log( 'Hello, ' + userName + '! How Are You?' )


// шаблонные строки

// console.log(`Привет, ${userName}! Как твои дела?`);


// ===== 6 Функции  ===== 

// DRY - DON'T REPEAT YOURSELF

// function sayHi() {
//     console.log("Hello, Dear User !")
// }

// sayHi();

// function declaration 

// function sayHi() {
//     console.log("Hello, Dear User !")
// }

// function expression

// let sayHi = function () {
//     alert("Привет")
// }


// ===== 6.1 Параметры и аргументы для функций  ===== 

// function sayHi(name) { // То что в скобке - это параметр
//     console.log(`${name}`)
// }

// sayHi('July') // То что в скобке - это аргумент
// sayHi('James')

// ===== return  ===== 

// function sum(a,b) {
//     console.log('start');
//     const result = a+b;
//     console.log(result);
    
//     return result
//     console.log('finish'); // после return значения не возвращаются
// }

// let me = sum(10,15);
// console.log(me)


// ===== 6.3 Функция как аргумент  ===== 

// function sum( a , b ) {
//     return a + b ;
// }

// console.log(sum(10,15))

// const res = sum(sum(15,15), sum(20,20)) //Функция как аргумент
// console.log(res);

// function doSomething(func) {
//     let x = 10;
//     let y = 15;
//     console.log(func(x, y));
// }

// doSomething(sum)

// ===== 6.3 Cамовызывающаяся функция IIFE ===== 

// (function () {
//     console.log("Hello");
// })()


// (function (a,b) {
//     console.log(a+b);
// })(10,15)

// ===== 6.4 Стрелочные функции ===== 

// const arrSayHi = (name) => {
//     console.log(`${name}`);
// }

// arrSayHi('Mark')

// const arrSayHi = (name) => console.log(`${name}`);
// Однострочные стрелочные функции


// arrSayHi('Mark')

// const arrSayHi = (a,b) => a+b;
// Однострочные стрелочные функции


// console.log(arrSayHi(1,10));

// ===== 7 Массивы ===== 


// массивы = это структура данных = коллекции

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota']

// console.log(autoBrands);

// console.log(autoBrands[0]);

// console.log(autoBrands.length);

// ===== 7.1 методы Массивов ===== 

// .push() - додавляет с конца
// .pop() - удаляет с конца
// .shift() - удаляет с начала
// .unshift() - добавляет с начала


// ===== 8 циклы ===== 

// for (let i = 0; i<5; i++) {
//     console.log(i)
// }

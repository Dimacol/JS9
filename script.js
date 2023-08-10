//1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
let minValue = Math.min(...arr);
console.log("Minimum element is:" + minValue);

//2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment 
//должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(){
   let Count = 1;
   return {
      increment () {
         Count++;
      },
      decrement () {
         Count--;
      },
      getValue(){
         return Count 
      },
                     }
   }
const counter = new createCounter();
counter.increment();//1+1=2
counter.increment(); //2+1=3
counter.increment();//3+1=4
counter.decrement();//4-1=3
alert( counter.getValue() );// ответ 3
   
//3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает
// первый найденный элемент с указанным классом в этом дереве.
//Пример
//const rootElement = document.getElementById('root');
//const targetElement = findElementByClass(rootElement, 'my-class');
//console.log(targetElement);
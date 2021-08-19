//* first task

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//* second task

let schedule = {};
function isEmpty(obj) {
   for (const key in obj) {
      return false;                          // если тело цикла начнет выполняться, то вернет false
   }
   return true;                              // в противном случае вернет true
}
alert(isEmpty(schedule)) //return true       // то есть мы спрашиваем "пуст ли обьект и  возворащает true"
schedule['8:30'] = 'get up';
alert(isEmpty(schedule)) //return false      // то есть мы спрашиваем "пуст ли обьект и  возворащает false, ведь ранее мы добавили туда свойство"

//* third task

const user = {
   name: "john"
};
user.name = 'Pete';                         // сработает. Константа не дает менять тело обьекта но не содержимое свойств обьекта

//* fourth task

function countSolaries23(obj) {
   let sum = 0;
   for (const key in obj) {
      sum += obj[key];
      return sum;
   }
   return false;
}

//* fifth task

function multiplyNumeric(obj) {
   for (let key in obj) {
      if (typeof obj[key] == 'number') {    // проверяет номер ли в данной итерации свойство 
         obj[key] *= 2;                     // если да, то умножает на 2
      }
   }
}
//* sixth task

// будет выведено значение user.name -- 'Джон'

//* seventh task

// 3 и 4 значение теряют свои свойства this
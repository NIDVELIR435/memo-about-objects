// обычно для выполнения каких либо действий обьекта, мы используем функции, которые бережно обпеделяем внутри свойства. 
// это обычно называют методами обьекта

let user={
   name:'Victor',
   age: 25
}
user.SayHi = function () {          // теперь у user есть свой метод, который позволяет ему здороваться с миром) 
   alert('Hello');
}

user2={                             // эти два обьекта делают одно и тоже, но во втором случае метод SayHi пишеться короче
   SayHi: function () {          
      alert('hello');
   }
}                                   // но такие методы не польностью эквиваленты, они имеют мелкие различия
user2 = {
   SayHi(){
      alert('hello');
   }
};

// ключевое слово 'this' в методах

let user3 = {                         
   name: 'Gan',
   age: 54,
   SayHi(){
      alert(`Hello, i\`m ${this.name}`);  // ключевое слово this ссылаеться на обьект user3 
   }
};

// значение this вычесляються во время работы и зависит от контекста

// стрелочные функции не имеют своих собственных this и по этому будет ссылаться на выше стоящее значение(обьект/функцию) 
### 1. Постфиксная и префиксная формы
Чему будут равны переменные a, b, c и d в примере ниже?
 ``` JS
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
``` 
### 2. Чему будут равны переменные a и x после исполнения кода в примере ниже?

 ``` JS
let a = 2;

let x = 1 + (a *= 2);
```

### 3. Преобразование типов
Какой результат будет у выражений ниже?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

### 4. Исправьте сложение
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.


``` JS
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12
```

### 5. Операторы сравнения

Каким будет результат этих выражений?

``` JS
5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

### 6. Перепишите 'if..else' в '?' (Имеется ввиду переписать с использованием тернарного оператора)

Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

``` JS
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
```

### 7. Вопрос об "if"

Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?

``` JS
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```

### 8. Последнее значение цикла
Какое последнее значение выведет этот код? Почему?

``` JS
let i = 3;

while (i) {
  alert( i-- );
}

```

### 9. Какие значения выведет цикл for?
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выведут alert с одинаковыми значениями или нет?

Постфиксная форма:

``` JS 
 for (let i = 0; i < 5; i++) alert( i );
 ```

Префиксная форма:

``` JS
for (let i = 0; i < 5; ++i) alert( i );
``` 

### 10. Замените for на while

Перепишите код, заменив цикл for на while, без изменения поведения цикла.

``` JS
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```


### 11. Повторять цикл, пока ввод неверен

Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

### 12. Вывести простые числа (Данный код нужно написать с использованием меток)

Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.

### 13. Переписать условия "if" на "switch"

``` JS
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
```

### 14. Функция `min(a, b)`

Напишите функцию `min(a,b)`, которая возвращает меньшее из чисел a и b.

Пример вызовов:

``` JS
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

### 15. Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:

``` JS
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
```
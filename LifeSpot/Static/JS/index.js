
// Запросим возраст пользователя и сохраним в переменную
let age = prompt("Пожалуйста, введите ваш возраст");

if (age >= 18) {
    // Те, кто старше 18, увидят приветствие и будут направлены на сайт
    alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
}
else {
    // Если введенное число < 18, либо если введено не число -
    // пользователь будет перенаправлен
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
}
// для получения пользовательского ввода самое простое - воспользоваться конструкцией prompt()
let userName = prompt("Пожалуйста, введите ваше имя");
alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символов`)
// создадим объект Map для хранения сессии
let session = new Map();
// Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent)


// Запросим возраст пользователя и тоже сохраним
session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

// Проверка на возраст и сохранение сессии
if (session.get("age") >= 18) {
    let startDate = new Date().toLocaleString();

    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
    session.set("startDate", startDate)
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
    a = true + 20 + "name"
}

// Вывод в консоль
for (let result of session) {
    console.log(result)
}
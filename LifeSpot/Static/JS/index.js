let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}

let session = new Map();

function handleSession() {
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
function getReview() {
    let review = {}

    review["userName"] = prompt("Name?")
    if (review["userName"] == null) {
        return
    }

    review["comment"] = prompt("Feedback")
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

    writeReview(review)
}
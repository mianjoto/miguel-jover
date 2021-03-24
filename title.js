const text = document.querySelector('.intro__title');
const stringText = text.textContent;
text.textContent = "";

const splitText = stringText.split("");
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i];
}

let char = 0;
let timer = setInterval(onTick, 80);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
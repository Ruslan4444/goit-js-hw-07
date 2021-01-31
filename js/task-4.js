// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueRef = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.setAttribute('style', "height: 100px; width: 100px;");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.setAttribute('style', "height: 100px; width: 100px;");

let counterValue = Number(counterValueRef.textContent);

function increment() {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);





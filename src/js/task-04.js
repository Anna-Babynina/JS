// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



let counterValue = 0;
   

const onButtonDecrClick = event => {
    value.textContent = counterValue -= 1;

};

const onButtonIncrClick = event => {
    value.textContent = counterValue += 1;

};
const counter = document.querySelector(`#counter`);
const buttonDecr = document.querySelector(`button[data-action = "decrement"]`);
const buttonIncr = document.querySelector(`button[data-action = "increment"]`);

    buttonDecr.addEventListener(`click, onButtonDecrClick`);
    buttonIncr.addEventListener(`click, onButtonIncrClick`);
    
const value = document.querySelector("#value");

console.log(counterValue);
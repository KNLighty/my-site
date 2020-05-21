console.log('Привет от JavaScript!');
let body = document.querySelector('.body');
console.log(body);

let TopButton = document.querySelector('.button_change_theme');
TopButton.onclick = function() {
  console.log('Кнопка нажата!');
  body.classList.toggle('light_theme');
};

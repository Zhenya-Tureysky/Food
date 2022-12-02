document.querySelector('.burger__menu').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('header__nav_active');
});

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('popup_active'); // Добавляем класс 'active' для фона
        popup.classList.add('popup_active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('popup_active'); // Убираем активный класс с фона
    popup.classList.remove('popup_active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('popup_active'); // Убираем активный класс с фона
        popup.classList.remove('popup_active'); // И с окна
    }
});


document.querySelector('.left__bar-burger').addEventListener('click', () => {
    document.querySelector('.header__menu').classList.toggle('header__menu_active');
});

document.querySelector('.header__menu-close').addEventListener('click', () => {
    document.querySelector('.header__menu').classList.toggle('header__menu_active');
});
function openRegistration() {
  document.getElementById("login").style.display = "none";
  document.getElementById("registration").style.display = "flex";
  document.getElementById("password_forget").style.display = "none";
}

function openLogin() {
  document.getElementById("login").style.display = "flex";
  document.getElementById("registration").style.display = "none";
  document.getElementById("password_forget").style.display = "none";
}

function passwordForget() {
  document.getElementById("login").style.display = "none";
  document.getElementById("registration").style.display = "none";
  document.getElementById("password_forget").style.display = "flex";
}


// Функция для добавления/удаления класса при клике
function toggleAngleClass() {
    var angleElement = document.querySelector('.angle'); // Получаем элемент с классом angle
    angleElement.classList.toggle('angle_act'); // Добавляем/удаляем класс angle_act
}

// Добавляем обработчик события клика
document.addEventListener('DOMContentLoaded', function() {
    var angleElement = document.querySelector('.wrap_angel'); // Получаем элемент с классом angle
    angleElement.addEventListener('click', toggleAngleClass); // Добавляем обработчик клика
});



//открыть попап персоны
function popupPerson () {
    var popup = document.querySelector('.popup_person');
    if (popup) {
        popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
    }
}




//переключатель табов
function showTab(tabId) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');

    // Сохраняем выбранный таб в localStorage
    localStorage.setItem('selectedTabId', tabId);
}

document.addEventListener('DOMContentLoaded', function() {
    // Показать выбранный таб при загрузке страницы
    showTab('tab_1');
});




function setActiveTab(button) {
    // Убираем класс tab__current у всех кнопок табов
    var tabButtons = document.querySelectorAll('.tabs__item');
    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove('tab__current');
    });

    // Добавляем класс tab__current к нажатой кнопке
    button.classList.add('tab__current');
}

document.addEventListener('DOMContentLoaded', function() {
    // Получаем первую кнопку таба и добавляем ей класс tab__current по умолчанию
    var defaultTabButton = document.querySelector('.tabs__item');
    if (defaultTabButton) {
        defaultTabButton.classList.add('tab__current');
    }

    // Добавляем слушатель событий для всех кнопок таба
    var tabButtons = document.querySelectorAll('.tabs__item');
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            setActiveTab(button);
        });
    });
});








function burgerMenu() {
    var header = document.querySelector('header');
    var burger = document.querySelector('.burger');
    var body = document.body;

    if (header) {
        header.classList.toggle('burger_menu');
        var isMenuOpen = header.classList.contains('burger_menu');

        setTimeout(function() {
            // Этот код выполнится через одну секунду
            if (isMenuOpen) {
                burger.classList.add('burger_cross');
            } else {
                burger.classList.remove('burger_cross');
            }
        }, 500);
    }
}


// Функция для проверки размера экрана и установки стиля для бургера
function checkScreenWidth() {
    // Получаем ссылку на элемент с классом "burger"
    var burger = document.querySelector('.burger');
    var header = document.querySelector('header');

    // Получаем ширину экрана
    var screenWidth = window.innerWidth;

    // Проверяем, если ширина экрана больше 608px
    if (screenWidth > 768) {
        // Устанавливаем стиль display:none для бургера
        burger.style.display = 'none';
        // Если меню открыто, закрываем его
        if (header.classList.contains('burger_menu')) {
            header.classList.remove('burger_menu');
            burger.classList.remove('burger_cross');
        }
    } else {
        // Устанавливаем стиль display:flex для бургера
        burger.style.display = 'flex';
    }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);


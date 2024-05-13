

//применения другого цвета дням недели чужого месяца
function colorizeFirstAndLastWeek() {
    // Получаем все даты в первой и последней неделе
    var firstWeekDates = document.querySelectorAll('.date__week:first-child .f_32');
    var lastWeekDates = document.querySelectorAll('.date__week:last-child .f_32');

    // Перекрашиваем в красный цвет все даты в первой неделе, которые находятся в диапазоне от 26 до 31
    firstWeekDates.forEach(function(date) {
        var value = parseInt(date.textContent);
        if (value >= 26 && value <= 31) {
            date.style.color = 'var(--c4)';
        }
    });

    // Перекрашиваем в красный цвет все даты в последней неделе, которые находятся в диапазоне от 1 до 6
    lastWeekDates.forEach(function(date) {
        var value = parseInt(date.textContent);
        if (value >= 1 && value <= 6) {
            date.style.color = 'var(--c4)';
        }
    });
}


// Вызываем функцию
colorizeFirstAndLastWeek();

function colorizeActiveWeek() {
    // Получаем все недели
    var weeks = document.querySelectorAll('.date__week');

    // Перебираем каждую неделю
    weeks.forEach(function(week) {
        // Проверяем, есть ли в текущей неделе класс date__active
        if (week.querySelector('.date__active')) {
            // Если есть, применяем цвет #F2F1FF ко всей текущей неделе
            week.style.backgroundColor = 'var(--c7)';
        } else {
            // Если нет, убираем цвет у текущей недели
            week.style.backgroundColor = '';
        }
    });
}

// Вызываем функцию
colorizeActiveWeek();





// Функция для удаления класса date__active из всех дат, кроме указанного контекста
function clearActiveDates(context) {
    const allDates = document.querySelectorAll('.date');
    allDates.forEach(function(date) {
        if (date !== context) {
            const allDays = date.querySelectorAll('.day');
            allDays.forEach(function(day) {
                day.classList.remove('date__active');
            });
        }
    });
}

function toggleDateActive(event, context) {
    if (event.target.classList.contains('day')) {
        // Получаем значение дня
        var dayValue = event.target.textContent.trim();
        console.log('Значение дня:', dayValue);

        // Удаляем класс date__active у всех дней
        const allDays = context.querySelectorAll('.day');
        allDays.forEach(function(day) {
            day.classList.remove('date__active');
        });

        // Добавляем класс date__active к выбранному дню
        event.target.classList.add('date__active');
        colorizeActiveWeek();

        // Устанавливаем флаг, что элемент уже был выбран в этом месяце
        dateAlreadyActive = true;
        // Очищаем активные даты в других месяцах
        clearActiveDates(context);
    }
}

document.querySelectorAll('.date').forEach(function(date) {
    date.addEventListener('click', function(event) {
        // Передаем контекст текущего месяца
        toggleDateActive(event, date);
    });
});






function monthPag(n) {
    const months = document.querySelectorAll('.month_slider .date');
    let currentMonthIndex = -1;

    // Находим индекс текущего активного месяца
    months.forEach((month, index) => {
        if (month.classList.contains('active')) {
            currentMonthIndex = index;
        }
    });

    // Скрываем текущий активный месяц
    if (currentMonthIndex !== -1) {
        months[currentMonthIndex].classList.remove('active');
    }

    // Вычисляем индекс следующего месяца
    let nextMonthIndex = currentMonthIndex + n;

    // Проверяем, чтобы индекс месяца не выходил за пределы диапазона
    if (nextMonthIndex >= months.length) {
        nextMonthIndex = 0;
    } else if (nextMonthIndex < 0) {
        nextMonthIndex = months.length - 1;
    }

    // Показываем следующий месяц
    months[nextMonthIndex].classList.add('active');

    // Отображаем название активного месяца
    const monthName = months[nextMonthIndex].getAttribute('data-name');
    const monthNameElement = document.querySelector('.month__name');
    if (monthNameElement) {
        monthNameElement.textContent = monthName;
    }
}

// Отображаем первый месяц по умолчанию
document.addEventListener('DOMContentLoaded', function() {
    const months = document.querySelectorAll('.month_slider .date');
    // Проверяем наличие месяцев
    if (months.length > 0) {
        // Добавляем класс 'active' к первому месяцу
        months[0].classList.add('active');
        // Отображаем название первого месяца
        const monthName = months[0].getAttribute('data-name');
        const monthNameElement = document.querySelector('.month__name');
        if (monthNameElement) {
            monthNameElement.textContent = monthName;
        }
    }
});




// добавляет колличество не вошедших в поле уроков
function showTwoLessons(hourSelector) {
    // Находим все блоки ".hour"
    const hours = document.querySelectorAll(hourSelector);

    // Перебираем каждый блок ".hour"
    hours.forEach(hour => {
        // Находим все уроки внутри текущего блока ".hour"
        const lessons = hour.querySelectorAll('.lesson');

        // Если уроков больше двух
        if (lessons.length > 2) {
            // Перебираем уроки начиная с третьего
            for (let i = 2; i < lessons.length; i++) {
                // Скрываем уроки, начиная с третьего
                lessons[i].style.display = 'none';
            }

            // Создаем блок ".lesson_count"
            const lessonCount = document.createElement('div');
            lessonCount.classList.add('lesson_count');

            // Вычисляем количество оставшихся уроков
            const remainingLessons = lessons.length - 2;

            // Добавляем количество оставшихся уроков в блок ".lesson_count"
            lessonCount.innerHTML = `<span>+${remainingLessons}</span>`;

            // Вставляем блок ".lesson_count" после последнего отображаемого урока
            lessons[1].parentNode.insertBefore(lessonCount, lessons[2]);
        }
    });
}

// Вызываем функцию и передаем селектор блока ".hour"
showTwoLessons('.hour');




// Открыть/закрыть календарь
function burgerCalendar() {
    var calendar = document.querySelector('.schedule__col1');
    var burger_calendar = document.querySelector('.burger_calendar');
    if (calendar) {
        if (calendar.style.display === 'none' || window.getComputedStyle(calendar).getPropertyValue('display') === 'none') {
            calendar.style.display = 'flex';
        } else {
            calendar.style.display = 'none';
        }
    }
}

// Слушатель изменений размера окна что бы календарь был открыт на десктопе
window.addEventListener('resize', function() {
    var calendar = document.querySelector('.schedule__col1');
    if (calendar && window.innerWidth > 768) {
        calendar.style.display = 'flex';
    } else {
        calendar.style.display = 'none';
    }
});



//открыть попап с уроками
document.addEventListener('DOMContentLoaded', function() {
    const hours = document.querySelectorAll('.hour');
    const popup = document.querySelector('.schedule__popup');

    hours.forEach(hour => {
        hour.addEventListener('click', function() {
            popup.style.display = 'flex';
        });
    });
});

//закрыть попап с уроками
function closeLessons() {
    const popup = document.querySelector('.schedule__popup');
    if (popup) {
        popup.style.display = 'none';
    }
}




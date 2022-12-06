/**
 * Инициализация элементов в многострочных ссылках навигационного блока
 */

const NavbarLink = [
    // Главная
    {
        title: "Главная",
        items: [
            {
                title: "Новости",
                href: "/index-news.html"
            },
            {
                title: "Объявления",
                href: "/ads.html"
            }
        ]
    },

    // Специальности
    {
        title: "Специальности",
        items: [
            { "title": "09.02.06 Сетевое и системное администрирование", "href": "/index-inner-page.html" },
            { "title": "09.02.07 Информационные системы и программирование", "href": "#" },
            { "title": "11.02.01 Радио аппаратостроение", "href": "#" },
            { "title": "15.02.08 Технология машиностроения", "href": "#" },
            { "title": "27.02.07 Управление качеством продукции, процессов и услуг (по отраслям)", "href": "#" },
            { "title": "13.02.02 Теплоснабжение и теплотехническое оборудование", "href": "#" },
            { "title": "27.02.05 Системы и средства диспетчерского управления", "href": "#" },
            { "title": "40.02.01 Право и организация социального обеспечения", "href": "#" },
            { "title": "38.02.01 Экономика и бухгалтерский учет (по отраслям)", "href": "#" },
            { "title": "39.02.01 Социальная работа", "href": "#" },
            { "title": "38.02.03 Операционная деятельность в логистике", "href": "#" },
            { "title": "40.02.02 Правоохранительная деятельность", "href": "#" },
            { "title": "11.01.01 Монтажник радиоэлектронной аппаратуры и приборов", "href": "#" },
            { "title": "27.02.06 Контроль работы измерительных приборов", "href": "#" },
            { "title": "12.02.10 Монтаж, техническое обслуживание и ремонт биотехнических и медицинских аппаратов и систем", "href": "#" },
            { "title": "11.02.12 Почтовая связь", "href": "#" },
            { "title": "09.02.01 Компьютерные системы и комплексы", "href": "#" },
            { "title": "09.02.03 Программирование в компьютерных системах", "href": "#" }
        ]
    },

    // Сведения об ОО
    {
        title: "Сведения об ОО",
        items: [
            { "title": "Основные сведения", "href": "/about-us.html" },
            { "title": "Структура и органы управления образовательной организацией", "href": "/structure.html" },
            { "title": "Учебно-методический комплекс", "href": "#" },
            { "title": "Документы", "href": "/documents.html" },
            { "title": "Образование", "href": "/education.html" },
            { "title": "Руководство", "href": "/management.html" },
            { "title": "Педагогический (научно-педагогический) состав", "href": "/pedagogical.html" },
            { "title": "Доска почета", "href": "#" },
            { "title": "Материально-техническое обеспечение и оснащенность образовательного процесса", "href": "/equipment.html" },
            { "title": "Платные образовательные услуги", "href": "#" },
            { "title": "Стипендии и меры поддержки обучающихся", "href": "#" },
            { "title": "Финансово-хозяйственная деятельность", "href": "#" },
            { "title": "Вакантные места для приема (перевода) обучающихся", "href": "#" },
            { "title": "Доступная среда", "href": "#" },
            { "title": "Международное сотрудничество", "href": "#" },
            { "title": "Противодействие коррупции", "href": "#" },
            { "title": "Видео галерея", "href": "#" },
            { "title": "История колледжа", "href": "#" },
            { "title": "Фотогалерея", "href": "#" },
            { "title": "Виртуальная экскурсия", "href": "#" },
            { "title": "Образовательные стандарты и требования", "href": "#" },
            { "title": "Мероприятия в области энергосбережения и повышения энергетической эффективности", "href": "#" }
        ]
    },

    // Студенту
    {
        title: "Студенту",
        items: [
            { "title": "Сервер дистанционного обучения Moodle", "href": "#" },
            { "title": "Расписание занятий", "href": "#" },
            { "title": "Информация для студентов", "href": "#" },
            { "title": "Спортивная жизнь", "href": "#" },
        ]
    },

    // Библиотека
    {
        title: "Библиотека",
        items: [
            { "title": "Родителям", "href": "#" },
            { "title": "Воспитательная работа", "href": "#" },
            { "title": "Студенческий совет", "href": "#" },
            { "title": "Заказ справок", "href": "#" },
        ]
    },

    // Абитуриенту
    {
        title: "Абитуриенту",
        items: [
            { "title": "Приемная комиссия", "href": "#" },
            { "title": "Специальности и формы обучения", "href": "#" },
            { "title": "Дни открытых дверей", "href": "#" },
            { "title": "Подготовительные курсы", "href": "#" },
            { "title": "Правила приема", "href": "#" },
            { "title": "Профориентация", "href": "#" },
            { "title": "Часто задаваемые вопросы", "href": "#" },
        ]
    },

    // Производственное обучение
    {
        title: "Производственное обучение",
        items: [
            { "title": "Лаборатории и мастерские", "href": "#" },
            { "title": "Производственная практика", "href": "#" },
            { "title": "Трудоустройство", "href": "#" }
        ]
    },

    // Работодателю
    {
        title: "Работодателю",
        items: [
            { "title": "Попечительский совет", "href": "#" },
            { "title": "Ворлдскиллс", "href": "#" },
            { "title": "Заочное обучение", "href": "#" }
        ]
    },

    // Поступление на заочное отделение 
    {
        title: "Поступление на заочное отделение",
        items: [
            { "title": "Учебный процесс", "href": "#" },
            { "title": "Библиотека", "href": "#" }
        ]
    },

    // ЦДО 
    {
        title: "ЦДО",
        items: [
            { "title": "Расписание занятий ЦДО", "href": "#" },
            { "title": "Центр компетенции", "href": "#" },
            { "title": "Worldskills", "href": "#" },
            { "title": "Абилимпикс", "href": "#" },
            { "title": "Демонстрационный экзамен", "href": "#" },
            { "title": "Мероприятия", "href": "#" },
            { "title": "Контакты", "href": "/index-contact.html" }
        ]
    },

    // Услуги 
    {
        title: "Услуги",
        items: [
            { "title": "Проведение совещаний", "href": "#" },
            { "title": "Спортивный комплекс", "href": "#" },
            { "title": "Бассейн", "href": "#" },
            { "title": "Электронная площадка для оплаты услуг", "href": "#" },
            { "title": "Контакты", "href": "/index-contact.html" }
        ]
    },

    // Информация
    {
        title: "Информация",
        items: [
            { "title": "Проведение совещаний", "href": "#" },
            { "title": "Спортивный комплекс", "href": "#" },
            { "title": "Бассейн", "href": "#" },
            { "title": "Электронная площадка для оплаты услуг", "href": "#" },
            { "title": "Контакты", "href": "/index-contact.html" }
        ]
    },
];

(() => {
    const headerMenu = document.querySelector('.header-menu');

    NavbarLink.forEach((item) => {
        const headerMenuItem = document.createElement('div');
        headerMenuItem.setAttribute('class', 'header-menu__item drop-down__element');

        const button = document.createElement('div');
        button.setAttribute('class', 'drop__button');
        button.appendChild(document.createTextNode(item.title));
        headerMenuItem.appendChild(button);

        const dropDownContent = document.createElement('div');
        dropDownContent.setAttribute('class', 'drop-down__content');

        item.items.forEach((value) => {
            const link = document.createElement('a');
            link.setAttribute('class', 'link');
            link.setAttribute('href', value.href);

            link.appendChild(document.createTextNode(value.title));

            dropDownContent.appendChild(link);
        });

        headerMenuItem.appendChild(dropDownContent);

        headerMenu.appendChild(headerMenuItem);
    });
})();

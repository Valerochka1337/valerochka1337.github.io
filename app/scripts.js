function monthDiff(dateFrom, dateTo) {
  var months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
  months -= dateFrom.getMonth();
  months += dateTo.getMonth() + 1;
  console.log(dateTo.getFullYear(), dateTo.getMonth(), dateTo.getDate());

  return months <= 0 ? 0 : months;
}

window.onload = function() {

  var startDate = new Date(2022, 9, 1);
  var now = new Date();

  var fullMonths = monthDiff(startDate, now).toString();

  document.getElementById("university-period").innerText = "(" + startDate.getMonth().toString() + ", " + startDate.getFullYear().toString() + "-...), " + fullMonths + " months";
  startDate = new Date(2023, 11, 1);
  fullMonths = monthDiff(startDate, now).toString();
  document.getElementById("job1-period").innerText = "(" + startDate.getMonth().toString() + ", " + startDate.getFullYear().toString() + "-...), " + fullMonths + " months";
};
document.addEventListener('DOMContentLoaded', function () {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('href').split('=')[1];
      switchLanguage(lang);
    });
  });
});

function switchLanguage(lang) {
  console.log('Switching language to: ', lang);

  if(lang === 'en') {
    document.querySelector('#lang-en').style.backgroundColor = "#a169bf";
    document.querySelector('#lang-en').style.fontWeight = "bold";
    document.querySelector('#lang-ru').style.backgroundColor = "#222";
    document.querySelector('#lang-ru').style.fontWeight = "normal";

    document.querySelector('#title').textContent = 'Valera Yartsev';

    document.querySelector('#about').textContent = 'About';
    document.querySelector('#about-content').textContent = 'Hey! I\'m Valerii Yartsev, and I\'m a junior backend developer. I specialize in backend development with C++/Python. If you are interested in working with me, feel free to message me using the contacts bellow!';

    document.querySelector('#links').textContent = 'Contacts && Links';
    document.querySelector('#links-telegram').textContent = 'Telegram';
    document.querySelector('#links-email').textContent = 'Email';
    document.querySelector('#links-github').textContent = 'GitHub';
    document.querySelector('#links-resume').textContent = 'Resume';
    document.querySelector('#links-resume').href = 'https://docs.google.com/document/d/1xNML53K5rPfALX9Jn6rA0lZqXj-dWSjLfOPuigutqcw';

    document.querySelector('#experience').textContent = 'Experience';
    document.querySelector('#experience-content-1-position').textContent = 'Intern C++ backend';
    document.querySelector('#job1-period').textContent = document.querySelector('#job1-period').textContent.toString().match(/(.)*\)(.)*(\d)/)[0] + " months";
    document.querySelector('#experience-content-1-description').textContent = 'Worked on several Yandex.Market projects (data indexing, yandex plus). Have built full CI for CRON tasks. Developed handlers for API\'s using USERVER. Have written lots of complicated SQL-queries.';

    document.querySelector('#education').textContent = 'Education';
    document.querySelector('#education-content-1-title').textContent = 'ITMO University';
    document.querySelector('#education-content-1-position').textContent = 'Bachelor';
    document.querySelector('#university-period').textContent = document.querySelector('#university-period').textContent.toString().match(/(.)*\)(.)*(\d)/)[0] + " months";
    document.querySelector('#education-content-1-faculty').textContent = 'Information Systems and Technologies';
    document.querySelector('#education-content-1-description').textContent = 'Algorithms and Data Structures, Oriented programming in C++, Programming patterns in C#, development technologies in Java, DB, GIT, Soft-Skills and team-building.';

    document.querySelector('#skills').textContent = 'Skills';
    document.querySelector('#skills-languages').textContent = 'Languages';
    document.querySelector('#skills-languages-russian').textContent = 'Russian ';
    document.querySelector('#skills-languages-russian-level').textContent = ' - Native';
    document.querySelector('#skills-languages-english').textContent = 'English ';
    document.querySelector('#skills-languages-english-level').textContent = ' - Advanced (C1)';

  } else if(lang === 'ru') {

    document.querySelector('#lang-ru').style.backgroundColor = "#a169bf";
    document.querySelector('#lang-ru').style.fontWeight = "bold";
    document.querySelector('#lang-en').style.backgroundColor = "#222";
    document.querySelector('#lang-en').style.fontWeight = "normal";

    document.querySelector('#title').textContent = 'Ярцев Валерий';

    document.querySelector('#about').textContent = 'Обо мне';
    document.querySelector('#about-content').textContent = 'Привет! Меня зовут Ярцев Валерий, и я джуниор С++/Python бэкенд-разработчик. С предложениями по работы вы всегда можете связаться со мной по ссылкам ниже!';

    document.querySelector('#links').textContent = 'Контакты';
    document.querySelector('#links-telegram').textContent = 'Телеграмм';
    document.querySelector('#links-email').textContent = 'Почта';
    document.querySelector('#links-github').textContent = 'Гитхаб';
    document.querySelector('#links-resume').textContent = 'Резюме';
    document.querySelector('#links-resume').href = 'https://docs.google.com/document/d/1L9tG_0owiFFQmdol1RjUd2-8mFiqO-mIT1eKCbBsfAM';

    document.querySelector('#experience').textContent = 'Опыт';
    document.querySelector('#experience-title').textContent = 'Яндекс';
    document.querySelector('#experience-content-1-position').textContent = 'С++ стажер-разработчик';
    document.querySelector('#job1-period').textContent = document.querySelector('#job1-period').textContent.toString().match(/(.)*\)(.)*(\d)/)[0] + " мес.";
    document.querySelector('#experience-content-1-description').textContent = ' Участвовал в разработке нескольких сервисов (индексация данных, Яндекс.Плюс). Разрабатывал CI для внутренних команд (переносил с сервера в облако). Писал ручки для http-сервера Яндекс.Плюса, используя USERVER. Готовил сложные таблицы с агрегированными данными.';

    document.querySelector('#education').textContent = 'Образование';
    document.querySelector('#education-content-1-title').textContent = 'НИУ ИТМО';
    document.querySelector('#education-content-1-position').textContent = 'Бакалавриат';
    document.querySelector('#university-period').textContent = document.querySelector('#university-period').textContent.toString().match(/(.)*\)(.)*(\d)/)[0] + " мес.";
    document.querySelector('#education-content-1-faculty').textContent = 'Информационные системы и технологии';
    document.querySelector('#education-content-1-description').textContent = 'Алгоритмы и структуры данных, Ориентированное программирование на C++, Паттерны программирования на C#, Технологии программирования на Java, Базы данных, Использование Гит, Техники коммуникации и командообразования.';

    document.querySelector('#skills').textContent = 'Навыки';
    document.querySelector('#skills-languages').textContent = 'Языки';
    document.querySelector('#skills-languages-russian').textContent = 'Русский';
    document.querySelector('#skills-languages-russian-level').textContent = '- Родной';
    document.querySelector('#skills-languages-english').textContent = 'Английский';
    document.querySelector('#skills-languages-english-level').textContent = '- Уровень носителя (C1)';
  }
}

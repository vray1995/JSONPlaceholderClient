# Решение тестового задание на позицию frontend разработчика в "RBKmoney"

## Текст задания 

Разработать UI клиент для открытого REST API: https://jsonplaceholder.typicode.com

1. Можно использовать любой современный ui фраемворк с любыми плагинами, которые вы считаете применимыми. 
   - [x] React, 
   - [ ] Angular, 
   - [ ] Vue, 
   - [ ] Vanilla JS 
2. Внешний вид и сценарий использования:
    - [x] На главной странице отображается список пользователей в виде таблицы, со столбцами: name, username, email, website. 
    - [x] По клику на строку в таблице необходимо сделать переход на страницу пользователя.
    - [x] На странице пользователя отображается его подробная информация:
        - [x] name, username, email, address (geo информацию можно не использовать), phone, website, company;
        - [x] Список альбомов с указанием title. По клику на конкретный альбом, необходимо сделать переход в альбом;
    - [x] Страница альбома представляет собой, отображение фотографий альбома в виде плитки. В каждом элементе плитки отображается title фотографии и сама фотография (поле url);
- [x] Использовать адаптивную верстку;
- [x] Проект должен быть расположен на github;
- [x] Проект должен запускаться командой `npm start` c корня проекта и быть доступным на `localhost:8000`;
6. Оцениваются следующие аспекты: 
    - [x] git flow,
    - [x] code style, 
    - [ ] верстка,
    - [x] качество кода,
    - [ ] конфигурация сборки проекта (готовые бандлеры по типу `create-react-app` и т.п не приветствуются);

## Стек технологий 

1. React
2. Redux (+ Redux-Saga)
3. Semantic UI React

## Run

1. `npm install`
2. `npm start`

Внес изменения в функционал приложения:

1. Исправил ошибку работы логики удаления задачи.
2. Исправил поведение модального окна(закрытие при нажатии клаивиши мыши на модальном окне и отпускании на маске. Поведение браузера верное, но UX не самый удачный)
3. Исправил ошибки в консоли.
4. Изменил плэйсхолдер описания добавления категории.
5. Исправил "выдавливание" из блока задачи кнопок удаления и редактирования.
6. Исправил отображение новой категории при добавлении задачи.
7. Исправил логику "слайса" задач, а именно поведение tasksClearedCategories
8. Рефакторинг некоторых условий передачи данных в качестве пропсов.
9. Рефакторинг файловой структуры приложения.
10. Рефакторинг Types, кое-где лишние поля в интерфейсах удалил.
11. Вынес большинство строковых значений(в большей степени названий классов) в .json и заимпортил их через константы.
12. Мелкие правки по коду, которые мне показались логичными.

Спасибо за задачу, было интересно и поучительно разобраться в коде.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

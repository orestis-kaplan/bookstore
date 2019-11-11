# Bookstore

Bookstore CMS is an app that contains books. Users can add or remove books from the list. Each book contain information such as: Title, Category that the books belongs to, Percentage of completition, Chapter that the user is reading now

Online preview: https://bookstorefinal.herokuapp.com/

## Screenshot

![screenshot](https://github.com/userman95/bookstore/blob/master/public/Screenshot%20(162).png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for further development.

### Installing

Necessary tools to be installed: 
* [Node.js, npm](https://www.npmjs.com/get-npm)
* [React](https://www.codecademy.com/articles/react-setup-i)
* [Redux](https://redux.js.org/introduction/installation)

## Built With

* Node.js
* React-DOM
* React-Create-App
* Redux
* React-Redux
* npm 6.4.1
* Javascript (ES6)
* HTML5
* CSS3

## Run the application
### Clone the repository
`git clone git@github.com:userman95/bookstore.git`
### and then just run it with 
`npm start`
### cheers!

## Optimization
* Server side logic, adding removing and updating books
* Authentication
* Add image upload functionality for books
* Pagination

## Deployment

To deploy your app in Github-pages, install gh-pages module from npm.
Run: `npm install gh-pages --save-dev` and then go to your `package.json` file,
add homepage: `"homepage": "http://yuribenjamin.github.io/my-app"` , at the start of the file , 
and 
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
Finally, run `npm run deploy` and wait for it till is throws a `Published message`

## Authors

* **[Orestis Kaplanis](https://github.com/userman95)**

# **MyReads Project**

This project is React.js Udacity's Nanodegree final assesment project. It demonstrates the ability to work with both functional and class components, state management, react routing and lifecycle event. It mainly revolves around moving books around shelves and the ability to search through various books by title or by the author's name.
## **Purpose**
1. Create 3 shelves; Currently Reading, Wanting to Read and Read
2.  In our main page, we're able to move books from one shelf to another, making sure it's shelf state is updated.
3. Using React Routers we are able to switch between multiple app pages
4. In the Search page we're able to search books and be able to add them to our shelves, if the book is already on the shelf it's shelf state is maintained within the book search
 
## **Installation**

- Above the list of files, click Code.
- To clone the repository using HTTPS, copy the HTTPS link
- In your command-line tool, clone repo using git clone URL

 ## **Dependencies**
 #### Before starting your project, you first must install dependencies
 - Run npm install 
 - Run npm start ( To start development server)
 
 ## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── components # component folder
    │   ├── Books.js # A component that presents the books present on each shelf
    │   ├── BookHandler.js # A component that displays the main page UI
    │   ├── BookOptions.js # A component that provides selector options for books
    │   ├── SearchedBooks.js  # A component that displays the search page UI
    │   ├── SearchHandler.js  # A component that helps your search/query books by title or author
    │   └── BookShelf.js # A component that sorts the book on every shelf
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

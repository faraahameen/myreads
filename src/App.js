import React from "react";
// import * as BooksAPI from "./BooksAPI"
import "./App.css";
import BookShelf from "./components/BookShelf";
import * as BookAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import BookHandler from "./components/BookHandler";
import SearchHandler from "./components/SearchHandler";
import NotFound from "./NotFound";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
  };
  componentDidMount() {
    BookAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  updateBookShelf = (book, shelf) => {
    BookAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      const updateBook = this.state.books
        .filter((currBook) => book.id !== currBook.id)
        .concat(book);
      this.setState(() => ({
        books: updateBook,
      }));
    });
  };

  render() {
      console.log(this.state.books)
    const bookShelves = [
      { shelf: 'currentlyReading', shelfTitle: 'Currently Reading' },
      { shelf: 'wantToRead', shelfTitle: 'Want to read' },
      { shelf: 'read', shelfTitle: 'Read' },
    ].map((shelf, index) => (
      <BookShelf
        key={index}
        onUpdate={this.updateBookShelf}
        shelfTitle={shelf.shelfTitle}
        shelf={shelf.shelf}
        books={this.state.books}
      />
    ));
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<BookHandler bookShelves={bookShelves} />} />
          <Route
            exact
            path="/search"
            element={<SearchHandler shelfBooks={this.state.books}  onUpdate={this.updateBookShelf}/>}
          />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    );
  }
}

export default BooksApp;

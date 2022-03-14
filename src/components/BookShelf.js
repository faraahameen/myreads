import React from "react";
import Books from "./Books.js";
const BookShelf = (props) => {
  const { shelfTitle, shelf, books, onUpdate } = props;
  const filteredBooks = books.filter((book) => book.shelf === shelf);
  console.log(books.shelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <Books
          onUpdate={onUpdate}
          shelfTitle={shelfTitle}
          books={filteredBooks}
        />
      </div>
    </div>
  );
};
export default BookShelf;

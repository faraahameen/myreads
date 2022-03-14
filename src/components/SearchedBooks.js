import React from "react";
import BookOptions from "./BookOptions";
const SearchedBooks = (props) => {
  const { books, onUpdate, shelfBooks } = props;
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: book.imageLinks
                    ? `url(${book.imageLinks.thumbnail}` ||
                      `url(${book.imageLinks.smallThumbnail}`
                    : "none",
                }}
              ></div>
              {shelfBooks.forEach((shelfBook) => {
                shelfBook.id === book.id && (book.shelf = shelfBook.shelf);
              })}
              <BookOptions book={book} onUpdate={onUpdate} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};
export default SearchedBooks;

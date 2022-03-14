import React from "react";
import BookOptions from "./BookOptions";
const Books = (props) => {
  const { books, onUpdate } = props;
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
                  backgroundImage: `url(${book.imageLinks.thumbnail}`,
                }}
              ></div>
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
export default Books;

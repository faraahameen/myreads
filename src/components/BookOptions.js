import React from "react";
const BookOptions = (props) => {
  const { onUpdate, book} = props;
  //console.log(books)
  const changeHandler = (event) => {
    onUpdate(book, event.target.value);
    //console.log(event.target.value)
  };
  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf || "none"} onChange={changeHandler}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default BookOptions;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import SearchedBooks from "./SearchedBooks";
import PropTypes from "prop-types";
class SearchHandler extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
  };
  state = {
    query: "",
    searchedBooks: [],
    found: false,
  };
  searchQueryHandler = (query, maxResults) => {
    this.setState(() => ({
      query: query,
    }));
    BooksAPI.search(query.trim(), maxResults).then((books) => {
      if (books.error !== "empty query" && books !== undefined) {
        this.setState(() => ({ searchedBooks: books, found: true }));
      } else {
        this.setState(() => ({
          searchedBooks: [],
          found: false,
        }));
      }
    });
  };
  render() {
    const { onUpdate, shelfBooks } = this.props;
    const { searchedBooks, query, found } = this.state;
    //console.log(searchedBooks.length);
    console.log(searchedBooks);
    let searchRes = "";
    if (query === "") {
      searchRes = "";
    } else if (!found) {
      searchRes = "No Books found";
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(event) =>
                this.searchQueryHandler(event.target.value, 20)
              }
              value={query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <SearchedBooks
            shelfBooks={shelfBooks}
            books={searchedBooks}
            onUpdate={onUpdate}
          />
        </div>
        <div className="not-found">
          <p>{searchRes}</p>
        </div>
      </div>
    );
  }
}
export default SearchHandler;

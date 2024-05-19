import React, { useState } from "react";
import BookData from "../../data/BookData";
import './BookComponent.css';

const BookComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 10;

  const filteredBooks = BookData.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.subject.toLowerCase().includes(searchQuery.toLowerCase())
    
  );

  const lastIndex = currentPage * booksPerPage;
  const firstIndex = lastIndex - booksPerPage;
  const books = filteredBooks.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search filter"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        </div>

      <div className="box-container">
        {books.map((book, index) => (
          <div className="card-container" key={index}>
            <img src={book.coverImage} alt="cover" />
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Subject: {book.subject}</p>
            <p>Published date: {book.publish_date}</p>
          </div>
        ))}
      </div>

      <footer>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={previousPage}>Back</a>
            </li>
            {pageNumbers.map((number) => (
              <li
                className={`page-item ${currentPage === number ? "active" : ""}`}
                key={number}
              >
                <a href="#" onClick={() => changePage(number)}>{number}</a>
              </li>
            ))}
            <li>
              <a href="#" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default BookComponent;

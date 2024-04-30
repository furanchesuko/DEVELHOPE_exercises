CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT VARCHAR(1),
  genre TEXT NOT NULL,
  published_year INTEGER NOT NULL,
  isbn INTEGER NOT NULL,
  price INTEGER NOT NULL,
  rating INTEGER not NULL,
  stock_count INTEGER NOT NULL
, publisher text, number_of_pages integer)
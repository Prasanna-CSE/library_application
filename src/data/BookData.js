const BookData = [
  
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "subject": "Psychological Fiction",
    "publish_date": "1866-01-14",
    "coverImage": "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "subject": "Magical Realism",
    "publish_date": "1967-05-30",
    "coverImage": "https://m.media-amazon.com/images/I/81MI6+TpYkL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "subject": "Classic Literature",
    "publish_date": "1877-01-01",
    "coverImage": "https://m.media-amazon.com/images/I/71dkYxdk3AL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "subject": "Gothic Fiction",
    "publish_date": "1818-01-01",
    "coverImage": "https://m.media-amazon.com/images/I/71hCBEMpQ0L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Bronte",
    "subject": "Gothic Fiction",
    "publish_date": "1847-12-01",
    "coverImage": "https://m.media-amazon.com/images/I/915-GLC2rkL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Jane Eyre",
    "author": "Charlotte Bronte",
    "subject": "Gothic Fiction",
    "publish_date": "1847-10-16",
    "coverImage": "https://m.media-amazon.com/images/I/91zU70Aw9IS._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Odyssey",
    "author": "Homer",
    "subject": "Epic Poetry",
    "publish_date": "8th century BCE",
    "coverImage": "https://m.media-amazon.com/images/I/81g0AATkO9L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Iliad",
    "author": "Homer",
    "subject": "Epic Poetry",
    "publish_date": "8th century BCE",
    "coverImage": "https://m.media-amazon.com/images/I/71XGV6a9MHL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
  },
  {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "subject": "Philosophical Fiction",
    "publish_date": "1880-11-26",
    "coverImage": "https://m.media-amazon.com/images/I/71OZJsgZzQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "subject": "Historical Fiction",
    "publish_date": "1869-01-01",
    "coverImage": "https://m.media-amazon.com/images/I/71wXZB-VtBL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "subject": "Classic Literature",
    "publish_date": "1861-08-01",
    "coverImage": "https://m.media-amazon.com/images/I/51evTcoKMGL.jpg"
  },
  {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "subject": "Satire",
    "publish_date": "1961-11-10",
    "coverImage": "https://m.media-amazon.com/images/I/71Ym0vDDWsL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "subject": "Historical Fiction",
    "publish_date": "2003-05-29",
    "coverImage": "https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "subject": "Historical Fiction",
    "publish_date": "2005-09-01",
    "coverImage": "https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "subject": "Historical Fiction",
    "publish_date": "1859-04-30",
    "coverImage": "https://m.media-amazon.com/images/I/71CQFGiPA+L._AC_UF1000,1000_QL80_DpWeblab_.jpg"
  },
  {
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "subject": "Historical Fiction",
    "publish_date": "1862-01-01",
    "coverImage": "https://m.media-amazon.com/images/I/51kcHFzP0lL.jpg"
  },
  {
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "subject": "Adventure Fiction",
    "publish_date": "1605-01-01",
    "coverImage": "https://m.media-amazon.com/images/I/71GBg+Ah1cL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "subject": "Epic Poetry",
    "publish_date": "1320-01-01",
    "coverImage": "https://m.media-amazon.com/images/I/51i-9SGWr-L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "subject": "Literary Fiction",
    "publish_date": "1952-09-01",
    "coverImage": "https://m.media-amazon.com/images/I/71RXc0OoEwL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "subject": "Science Fiction",
    "publish_date": "1969-03-31",
    "coverImage": "https://m.media-amazon.com/images/I/51jLxTxTnyL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "subject": "Dystopian Fiction",
    "publish_date": "1953-10-19",
    "coverImage": "https://m.media-amazon.com/images/I/61z7RDG3OIL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "subject": "Southern Gothic",
    "publish_date": "1929-10-07",
    "coverImage": "https://m.media-amazon.com/images/I/719gwGw0DlL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "subject": "Classic Literature",
    "publish_date": "1925-04-10",
    "coverImage": "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780141037639&w=&h=570"
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "subject": "Classic Literature",
    "publish_date": "1960-07-11",
    "coverImage": "https://m.media-amazon.com/images/I/61zxX3+G+tL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "subject": "Dystopian Fiction",
    "publish_date": "1949-06-08",
    "coverImage": "https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "subject": "Classic Literature",
    "publish_date": "1813-01-28",
    "coverImage": "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "subject": "Classic Literature",
    "publish_date": "1951-07-16",
    "coverImage": "https://m.media-amazon.com/images/I/7108sdEUEGL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "To the Lighthouse",
    "author": "Virginia Woolf",
    "subject": "Modernist Literature",
    "publish_date": "1927-05-05",
    "coverImage": "https://m.media-amazon.com/images/I/517Hf-iPmnL.jpg"
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "subject": "Dystopian Fiction",
    "publish_date": "1932-10-14",
    "coverImage": "https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "subject": "Adventure Fiction",
    "publish_date": "1851-10-18",
    "coverImage": "https://cdnb.artstation.com/p/assets/images/images/028/032/393/large/tyler-lockett-moby-dick.jpg?1593289696"
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "subject": "Fantasy",
    "publish_date": "1937-09-21",
    "coverImage": "https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-670x1024.jpg"
  },
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "subject": "Fantasy",
    "publish_date": "1954-07-29",
    "coverImage": "https://m.media-amazon.com/images/I/91Yr0n5lNWL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "subject": "Classic Literature",
    "publish_date": "1939-04-14",
    "coverImage": "https://m.media-amazon.com/images/I/81yN7h6yG-L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "subject": "Gothic Fiction",
    "publish_date": "1890-07-20",
    "coverImage": "https://m.media-amazon.com/images/I/51IPe62r8gL._AC_UF1000,1000_QL80_.jpg"
  }
];

export default BookData;

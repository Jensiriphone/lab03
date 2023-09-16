// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
    // a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id. 
    //*how to return only title?*
    
    function getBookTitle(bookId) {
       return result = books.find(books => books.id === bookId);
    };
    
    console.log(getBookTitle(1));
    
    
    // // b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
    function getOldBooks() {
        return books.filter(books => books.year <= 1950);
    };
    
    let oldBooks = getOldBooks();
    
    console.log(oldBooks);
    
    // // c) Write a function addGenre() that uses the map function to add a new genre property
    // // to all of the above books, with the value ‘classic’. 
    function addGenre(newGenre) {
        books = books.map(books => {
            return {...books, genre: newGenre};
        });
    };
    
    addGenre('classics');
    console.log(books);
    
    // d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose
    // names start with authorInitial.

    function getTitles(authorInitial) {
        let titles = books.filter(books => books.author.startsWith(authorInitial)).map(books => books.title);
        return titles;
    };
    console.log(getTitles('J'));
    
    // // e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.  
    
    function latestBook() {
        let latest = books[0];
        books.forEach(books => {
            if (books.year > latest.year) {
                latest = books;
            }
        });
        return latest;
    };
    console.log(latestBook());
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books){
  let total = 0;
  books.forEach((book)=>{
    if (!book.borrows[0].returned){
      total++
    }
  });
  return total;
}

function getMostCommonGenres(books) {
  const bookGenre = books.map((book)=> book.genre);
  const mostCommon = [];
  bookGenre.map((genre)=>{
    const genreCount = mostCommon.findIndex((element)=> element.name === genre);
    if (genreCount >= 0){
      mostCommon[genreCount].count++;
    }
    else{
      mostCommon.push({name: genre , count: 1})
    }
  });
  mostCommon.sort((a , b)=> b.count - a.count);
  if (mostCommon.length > 5){
    return mostCommon.slice (0 , 5);
  }
  return mostCommon;
}

function getMostPopularBooks(books) {
  let total = 0;
  const popularBooks = [];
  for (let i = 0; i < books.length; i++){
    total = books[i].borrows.length;
    popularBooks.push({name:books[i].title , count: total});
  }
  popularBooks.sort((a , b)=> b.count - a.count);
  return popularBooks.slice(0 , 5);
}
// helper function
function booksFilteredByAuthor(books , author) {
  return books.filter((book)=> book.authorId === author);
}

function getMostPopularAuthors(books, authors) {
  const mostPop = authors.map((author)=> {
    const name = `${author.name.first} ${author.name.last}`
    const booksOfAuthor = booksFilteredByAuthor(books , author.id);
    const borrowedCount = booksOfAuthor.reduce((acc , book)=> acc + book.borrows.length, 0);
    const mostPopBook = {
      name: name, count: borrowedCount
    };
    return mostPopBook;
  })
  mostPop.sort((a , b)=> b.count - a.count);
  return mostPop.slice (0 , 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

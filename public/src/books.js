function findAuthorById(authors, id){
  return authors.find((author)=> author.id === id);
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let total = [];
  const checkedOutArray = [];
  const returnedArray = [];
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      checkedOutArray.push(books[i]);
    }
    else{
      returnedArray.push(books[i]);
    }
  }
  return total = [checkedOutArray , returnedArray];
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows.map((borrow)=>{
    const account = accounts.find((account)=> account.id === borrow.id);
    return {...account , ...borrow}
  })
    return borrowed.slice(0 , 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

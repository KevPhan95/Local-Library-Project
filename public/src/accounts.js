function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((last1 , last2) => last1.name.last < last2.name.last ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  let borrow = 0;
  for (let book in books){
    const {borrows}= books[book];
    borrows.forEach((bookId)=>{
      if (bookId.id === account.id){
        borrow++
      }
    })
  }
  return borrow;
}

function getBooksPossessedByAccount(account, books, authors){
  const count = [];
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false && books[i].borrows[0].id === account.id){
      for (let j = 0; j < authors.length; j++){
        if (books[i].authorId === authors[j].id){
          count.push({...books[i] , author: authors[j]}); 
        }
      }
    }
  }
  return count;
}





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

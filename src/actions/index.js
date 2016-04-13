export function selectBook(book) {
  /*selectBook is an ActionCreator, it must return an action object and a type property*/
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

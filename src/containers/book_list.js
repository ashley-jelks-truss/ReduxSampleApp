import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {


  renderList() {
    return this.props.books.map((book) => {
        return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            /*On click this function returns this.props on the func selectBook and passes it a book*/
            className="list-group-item">
            {book.title}
          </li>
          /*Returns a mapping of the book titles as a list*/
        );
    });
  };

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
        {/*Calls the function renderList() on this, where 'this' is the Booklist object*/}
      </ul>
    );
  }
}

//Anything retrurn from mapStateToProps will become a props of the BookList container
function mapStateToProps(state) {
  /*Takes application state as an argument and returns it as a props of BookList....*/
  return {
      books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  /* When selectBook is called, the result should be passed to all Reducers....the result passes to the dispatch function
  Dispatch returns all the results to the app's reducers*/
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/*Promote BookList from a component to a container -- it needs to know about this new dispatch method, selectBook.
Make it available as a prop*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


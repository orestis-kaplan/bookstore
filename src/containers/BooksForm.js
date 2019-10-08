import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: bookCategories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newBook = this.state;
    const { createBook } = this.props;
    createBook(newBook);
    this.setState({ title: '', category: bookCategories[0] });
    document.getElementById(bookCategories[0]).selected = true;
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <select id="category" onChange={this.handleChange}>
          {bookCategories.map((category) => (
            <option id={category} value={category} key={category}>{category}</option>
          ))}
        </select>
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, { createBook })(BooksForm);

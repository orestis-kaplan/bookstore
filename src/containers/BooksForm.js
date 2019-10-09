import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import './styles/BooksForm.css';

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
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <label className="label" htmlFor="title">ADD NEW BOOK</label>
        <div className="form-control">
          <input
            id="title"
            className="input-book"
            placeholder="Book title"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <select value={this.state.category} className="category-selection" id="category" onChange={this.handleChange}>
            {bookCategories.map((category) => (
              <option id={category} value={category} key={category}>{category}</option>
            ))}
          </select>
          <button className="submit" type="submit" onClick={this.handleSubmit}>ADD BOOK</button>
        </div>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, { createBook })(BooksForm);

import React from 'react';
import { createBook }  from '../actions/index';
import { connect } from 'react-redux';
 
const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          category: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {        
        this.setState({ [event.target.id]: event.target.value });                
    }
    handleSubmit(event){
        event.preventDefault();
        const newBook = this.state;
        this.props.createBook(newBook);
        this.setState({ title: '',category: '' });                
    }

    render(){
        return (
            <form>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <select id="category" onChange = {this.handleChange}>
                    {bookCategories.map((category, index) => (
                        <option value={category} key={index}>{category}</option>
                    ))}
                </select>
                <input type="submit" onClick={this.handleSubmit} />
            </form>
        );
    }
};

export default connect(null, { createBook })(BooksForm);

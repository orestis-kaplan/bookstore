import React from 'react';
import PropTypes from 'prop-types';
import './styles/Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, category, removeBook,percentage = 0
}) => (
  <tr className="book">
    <td className="book-row">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="removeBook" onClick={() => removeBook(id)}>Remove</p>
    </td>
    <td>
      <div className="center-td">
        <div className="percentage-circle">
          <CircularProgressbar value={percentage} />
        </div>  
        <div>
          <p className="percentage-info">{percentage}%</p>   
          <p className="percentage-info">Completed</p>
        </div>  
      </div>
    </td>
    <td><div className="line"></div></td>
    <td className="update">
      <div>
        <p className="current">CURRENT CHAPTER</p>
        <p className="chapterName">Chapter Name</p>
        <div className ="btn-panel">
          <p className="btn">UPDATE PROGRESS</p>
        </div>
      </div>
    </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;

import React from 'react';
import './styles/Header.css';
import CategoryFilter from '../containers/CategoryFilter';

const Header = () => (
    <div className="header">
        <div className="header-tabs">
            <div className="logo"><p>Bookstore CMS</p></div>
            <div className="book-tab"><p>BOOKS</p></div>
            <div className="categories-tab"><CategoryFilter /></div>            
        </div>
        <div className="profile"><div className="profile-pic"></div></div>
    </div>
);

export default Header;
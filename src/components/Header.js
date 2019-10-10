import React from 'react';
import './styles/Header.css';

const Header = () => (
    <div className="header">
        <div className="header-tabs">
            <div className="logo"><p>Bookstore CMS</p></div>
            <div className="book-tab"><p>BOOKS</p></div>
            <div className="categories-tab">CATEGORY</div>            
        </div>
        <div className="profile"><div className="profile-pic"></div></div>
    </div>
);

export default Header;
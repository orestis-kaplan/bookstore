import React from 'react';
import './styles/Header.css';

const Header = () => (
    <div className="header">
        <div className="header-tabs">
            <div className="logo"><p>Digital Course CMS</p></div>
            <div className="book-tab"><p>COURSES</p></div>
            <div className="categories-tab">CATEGORY</div>            
        </div>
        <div className="profile"><div className="profile-pic"></div></div>
    </div>
);

export default Header;
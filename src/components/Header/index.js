import React from 'react';
import './styles.scss'

function Header() {
    return (
        <header className="page__header">
            <div className="page__hero-container">
                <p className="header__hero">Hola!</p>
                <p className="header__hero">Soy Elvira Fuente,</p>
                <h1 className="header__hero sub">Programadora Front End.</h1>
            </div>
            <i class="fas fa-chevron-down"></i>

        </header>
    )
}

export default Header;
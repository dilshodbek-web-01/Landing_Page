import React, { useState } from 'react';
import './index.scss'

const index = () => {

    const [show, setShow] = useState(false);


    return (
        <>
            <header className='header'>
                <div className="container">
                    <nav className='nav'>

                        <div className="nav__left">
                            <h1 className='nav-logo'>Personally</h1>
                            <ul className='nav__list'>
                                <li className='nav__list--item'>
                                    <a className='nav__list--item-link' href="#">Maqolalar</a>
                                </li>
                                <li className='nav__list--item'>
                                    <a className='nav__list--item-link' href="#">Ijtimoiy tarmoqlar</a></li>
                            </ul>
                        </div>

                        <div className="nav__right">
                            <select className="nav__right--select">
                                <option value="">Uzbek</option>
                                <option value="">Русский</option>
                                <option value="">English</option>
                            </select>
                            <button className="nav__right-btn">
                                Xabar qoldirish
                            </button>
                        </div>

                        <span className='nav__menu' onClick={() => {
                            setShow((e) => !e)
                        }}>
                            <i class="fa-solid fa-bars"></i>
                        </span>

                        <div className={`modal ${show ? "d-block" : "d-none"}`}>

                            <ul className='nav__list'>
                                <li className='nav__list--item'>
                                    <a className='nav__list--item-link' href="#">Maqolalar</a>
                                </li>
                                <li className='nav__list--item'>
                                    <a className='nav__list--item-link' href="#">Ijtimoiy tarmoqlar</a></li>
                            </ul>

                            <select className="modal__right--select">
                                <option className='modal__right--select-option' value="">Uzbek</option>
                                <option className='modal__right--select-option'  value="">Русский</option>
                                <option className='modal__right--select-option'  value="">English</option>
                            </select>

                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default index;
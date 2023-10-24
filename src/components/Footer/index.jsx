import React from 'react';
import './index.scss'

const index = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__left">
                            <h2 className='footer__left-title'>Alisher
                                Rustamov</h2>
                            <p className='footer__left-text'>Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis</p>
                        </div>

                        <div className="footer__right">
                            <h2 className='footer__right-title'>Xabar qoldirish</h2>
                            <p className='footer__right-text'>Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish imkoniyatingiz bor!</p>
                            <span className='footer__right--span'>
                                <input className='footer__right--span-input' type="text" placeholder='Xabar Qoldirish' />
                                <button className='footer__right--span-btn'>Yuborish</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
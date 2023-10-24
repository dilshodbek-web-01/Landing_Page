import React from 'react';
import './index.scss'
import Alisher from '../../assets/alisher.png'
import Picture from '../../assets/Picture.png'
import Picture1 from '../../assets/Picture1.png'
import Picture2 from '../../assets/Picture2.png'
import Telegram from '../../assets/telegram.svg'
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg'
import YouTube from '../../assets/youtube.svg'
import Social from '../../assets/social-img.png'
import Post from '../../assets/post-thubnail.png'

const index = () => {
    return (
        <>
            <div className="home">

                <div className="intro__up">
                    <div className="container">
                        <div className="intro">
                            <div className="intro__content">
                                <h1 className='intro__content-title'>Alisher Rustamov</h1>
                                <p className="intro__content-text">
                                    Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis
                                </p>
                                <a className='intro__content-link' href="#">Men haqimda</a>
                            </div>
                            <div className="intro__img">
                                <img src={Alisher} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="twoo">

                        <div className="twoo__left">

                            <div className="twoo__left--boxes">

                                <div className="twoo__left--boxes--card">
                                    <img className='twoo__left--boxes--card-img' src={Picture} alt="" />
                                    <div className='card-extra'>
                                        <h3 className='twoo__left--boxes--card-title'>Motivasiya bergim keladi ayrim payt</h3>
                                        <p className='twoo__left--boxes--card-text'>Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.</p>
                                        <p className='twoo__left--boxes--card-time'>13.08.2022</p>
                                    </div>
                                </div>

                                <div className="twoo__left--boxes--card">
                                    <img className='twoo__left--boxes--card-img' src={Picture1} alt="" />
                                    <div className="card-extra">
                                        <h3 className='twoo__left--boxes--card-title'>Motivasiya bergim keladi ayrim payt</h3>
                                        <p className='twoo__left--boxes--card-text'>Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.</p>
                                        <p className='twoo__left--boxes--card-time'>13.08.2022</p>
                                    </div>
                                </div>

                                <div className="twoo__left--boxes--card">
                                    <img className='twoo__left--boxes--card-img' src={Picture2} alt="" />
                                    <div className="card-extra">
                                        <h3 className='twoo__left--boxes--card-title'>Boy-otaning xayotidan</h3>
                                        <p className='twoo__left--boxes--card-text'>Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.</p>
                                        <p className='twoo__left--boxes--card-time'>13.08.2022</p>
                                    </div>
                                </div>

                            </div>

                            <div className="social-img">
                                <img src={Social} alt="" />
                            </div>

                            <div className="down_contents_wrapper">

                                <div className="down_contents">

                                    <div className="down_contents--left">
                                        <a href="#" className='down_contents--left-title'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</a>
                                        <p className='down_contents--left-text'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                        <p className='down_contents--left-time'>13.08.2022</p>
                                    </div>

                                    <div className='down_contents--right'>
                                        <img className='down_contents--right-img' src={Post} alt="" />
                                    </div>
                                </div>

                                <div className="down_contents">

                                    <div className="down_contents--left">
                                        <a href="#" className='down_contents--left-title'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</a>
                                        <p className='down_contents--left-text'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                        <p className='down_contents--left-time'>13.08.2022</p>
                                    </div>

                                    <div className='down_contents--right'>
                                        <img className='down_contents--right-img' src={Post} alt="" />
                                    </div>
                                </div>

                                <div className="down_contents">

                                    <div className="down_contents--left">
                                        <a href="#" className='down_contents--left-title'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</a>
                                        <p className='down_contents--left-text'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                        <p className='down_contents--left-time'>13.08.2022</p>
                                    </div>

                                    <div className='down_contents--right'>
                                        <img className='down_contents--right-img' src={Post} alt="" />
                                    </div>
                                </div>

                                <div className="down_contents">

                                    <div className="down_contents--left">
                                        <a href="#" className='down_contents--left-title'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</a>
                                        <p className='down_contents--left-text'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…</p>
                                        <p className='down_contents--left-time'>13.08.2022</p>
                                    </div>

                                    <div className='down_contents--right'>
                                        <img className='down_contents--right-img' src={Post} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="twoo__right">
                            <div className="twoo__right--up">
                                <h1 className='twoo__right--up-title'>Mashhur maqolalar</h1>

                                <div className="twoo__right--up--contents">

                                    <div className="twoo__right--up--contents__content">
                                        <a className="twoo__right--up--contents__content-title" href="#">Boy-otaning xayotidan...</a>
                                        <p className='twoo__right--up--contents__content-time'>13.08.2022</p>
                                        <hr />
                                    </div>

                                    <div className="twoo__right--up--contents__content">
                                        <a className="twoo__right--up--contents__content-title" href="#">Boy-otaning xayotidan...</a>
                                        <p className='twoo__right--up--contents__content-time'>13.08.2022</p>
                                        <hr />
                                    </div>

                                    <div className="twoo__right--up--contents__content">
                                        <a className="twoo__right--up--contents__content-title" href="#">Boy-otaning xayotidan...</a>
                                        <p className='twoo__right--up--contents__content-time'>13.08.2022</p>
                                        <hr />
                                    </div>

                                    <div className="twoo__right--up--contents__content">
                                        <a className="twoo__right--up--contents__content-title" href="#">Boy-otaning xayotidan...</a>
                                        <p className='twoo__right--up--contents__content-time'>13.08.2022</p>
                                        <hr />
                                    </div>

                                </div>
                            </div>

                            <div className="twoo__right--socials">
                                <h3 className="twoo__right--socials-title">Ijtimoiy tarmoqlar</h3>

                                <a className='twoo__right--socials--link' href="#">
                                    <img className='twoo__right--socials--link-img' src={Facebook} alt="" />
                                    <p className='twoo__right--socials-link-text'>Facebook</p>
                                </a>

                                <a className='twoo__right--socials--link' href="#">
                                    <img className='twoo__right--socials--link-img' src={Telegram} alt="" />
                                    <p className='twoo__right--socials-link-text'>Telegram</p>
                                </a>

                                <a className='twoo__right--socials--link' href="#">
                                    <img className='twoo__right--socials--link-img' src={Instagram} alt="" />
                                    <p className='twoo__right--socials-link-text'>Instagram</p>
                                </a>

                                <a className='twoo__right--socials--link' href="#">
                                    <img className='twoo__right--socials--link-img' src={YouTube} alt="" />
                                    <p className='twoo__right--socials-link-text'>Youtube</p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </>
    );
};

export default index;
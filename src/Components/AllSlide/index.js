import React from 'react';
import { ref, onValue } from "firebase/database";
import { db } from '../../Firebase';
import { useState, useEffect } from 'react';

import { Wrapper, Content } from './AllSlide.styles';

import profile_photo from '../../Images/profile-user.svg';
import right_arrow from '../../Images/right-arrow.png';
import { auth } from '../../Firebase';
import { useStateValue } from '../../StateProvider';
import { useNavigate } from 'react-router';

const AllSlide = () => {

    const [{user}, setBasket] = useStateValue();
    const [username, setUsername] = useState('');
    const history = useNavigate();

    const useShowSideMenu = () => {
        document.getElementsByClassName('slide')[0].style.margin = '0 0 0 -420px';
        document.getElementsByClassName('slide')[0].style.transition = "all 0.5s ease-in";
        document.getElementsByClassName('x')[0].style.opacity='0';
        document.getElementsByClassName('x')[0].style.transition='0.5s';
    }

    const setSeeAll = () => {
        try{
            document.getElementsByClassName('additional')[0].className='additional-shown';
            document.getElementsByClassName('additional-shown')[0].style.transition = "all 1s ease-in";
            document.getElementsByClassName('see-all')[0].getElementsByClassName('see')[0].textContent='See Less';
            document.getElementsByClassName('see-all')[0].getElementsByClassName('arrow')[0].style.transform='rotate(-90deg)';
            document.getElementsByClassName('see-all')[0].getElementsByClassName('arrow')[0].style.margin= '-10px 0 0 15px';
            document.getElementsByClassName('see-all')[0].style.padding='15px 0 15px 35px';
        }
        catch
        {
            document.getElementsByClassName('additional-shown')[0].className='additional';
            document.getElementsByClassName('additional')[0].style.transition = "all 1s ease-out";
            document.getElementsByClassName('see-all')[0].getElementsByClassName('see')[0].textContent='See All';
            document.getElementsByClassName('see-all')[0].getElementsByClassName('arrow')[0].style.transform='rotate(90deg)';
            document.getElementsByClassName('see-all')[0].getElementsByClassName('arrow')[0].style.margin='0 10px 10px 0';
            document.getElementsByClassName('see-all')[0].style.padding='15px 0 0px 35px';
        }
    }

    const slide_menu_content_slide = () => {
        document.getElementsByClassName('content')[0].style.margin='0 0 0 -360px';
        document.getElementsByClassName('content')[0].style.transition = "all 0.3s ease-in";
    }

    const slide_menu_content_slide_inverse = () => {
        document.getElementsByClassName('content')[0].style.margin='0 0 0 0';
        document.getElementsByClassName('content')[0].style.transition = "all 0.3s ease-out";
    }

    useEffect(() => {
        if (user)
        {
            onValue(ref(db, '/users/' + user.uid), (snapshot) => {
                setUsername((snapshot.val() && snapshot.val().username).split(' ')[0]);
                return;
            }, {
                onlyOnce: true
            });
        }
    }, [user, username])

    const signout = () => {
        if (user)
        {
            auth.signOut();
            setBasket({type: 'empty_basket', basket: []});
            history('/');
        }
    }

    return(
        <Wrapper>
            <div className='x' onClick={useShowSideMenu}>&#10005;</div>
            <Content>
                <div className='profile'>
                    <span><img alt='' src={profile_photo} /></span>
                    <span className='hello'>Hello, {user ? username:"Sign In"}</span>
                </div>
                <div className='content-manager'>
                    <div className='content'>
                        <div className='digital'>
                            <div className='title'><b>Digital Content & Devices</b></div>
                            <div className='type' onClick={slide_menu_content_slide}>
                                <span>Amazon Music</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>Kindle E-readers & Books</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>Appstore for Android</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                        </div>
                        <hr/>
                        <div className='department'>
                            <div className='title'><b>Shop by Department</b></div>
                            <div className='type'>
                                <span>Electronics</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>Computers</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>Smart Home</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>Arts & Crafts</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='additional'>
                                <hr/>
                                <div className='type'>
                                    <span>Automotive</span>
                                    <span><img alt=''  src={right_arrow} /></span>
                                </div>
                                <div className='type'>
                                    <span>Baby</span>
                                    <span><img alt=''  src={right_arrow} /></span>
                                </div>
                                <div className='type'>
                                    <span>Beauty and personal care</span>
                                    <span><img alt=''  src={right_arrow} /></span>
                                </div>
                                <div className='type'>
                                    <span>Women's Fashion</span>
                                    <span><img alt=''  src={right_arrow} /></span>
                                </div>
                            </div>
                            <div className='see-all' onClick={setSeeAll}>
                                <span className='see'>See All</span>
                                <span className='arrow'><img alt=''  src={right_arrow} /></span>
                            </div>
                        </div>
                        <hr/>
                        <div className='programs'>
                            <div className='title'><b>Programs & Features</b></div>
                            <div className='type'>
                                <span>Gift Cards</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>#FoundItOnAmazon</span>
                            </div>
                            <div className='type'>
                                <span>Amazon Live</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='type'>
                                <span>International Shopping</span>
                                <span><img alt=''  src={right_arrow} /></span>
                            </div>
                            <div className='see-all'>
                                <span>See All</span>
                                <span className='arrow'><img alt=''  src={right_arrow} /></span>
                            </div>
                        </div>
                        <hr/>
                        <div className='help'>
                            <div className='title'><b>Help & Settings</b></div>
                            <div className='type'>
                                <span>Your Account</span>
                            </div>
                            <div className='type'>
                                <span>English</span>
                            </div>
                            <div className='type'>
                                <span>United States</span>
                            </div>
                            <div className='type'>
                                <span>Customer Service</span>
                            </div>
                            <div className='type' onClick={signout}>
                                <span>Sign Out</span>
                            </div>
                        </div>
                    </div>
                    <div className='content-information'>
                        <div className='main-menu' onClick={slide_menu_content_slide_inverse}>
                            <div className='main-menu-text'><b>MAIN MENU</b></div>
                            <hr/>
                        </div>
                        <div className='amazon-music'>
                            <div className='title'><b>Stream Music</b></div>
                            <div className='type'>
                                <span>Amazon Music Unlimited</span>
                            </div>
                            <div className='type'>
                                <span>Amazon Music HD</span>
                            </div>
                            <div className='type'>
                                <span>Amazon Music Prime</span>
                            </div>
                            <div className='type'>
                                <span>Free Streaming Music</span>
                            </div>
                            <div className='type'>
                                <span>Podcasts</span>
                            </div>
                            <div className='type'>
                                <span>Open Web Player</span>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default AllSlide;
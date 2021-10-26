import React from 'react';
import { useStateValue } from '../../StateProvider';
import { ref, onValue } from "firebase/database";
import { db } from '../../Firebase';
import { useState, useEffect } from 'react';

//Components
import { Wrapper, Content } from './Header.styles';

//Images
import amazon_logo from '../../Images/amazon-logo.png';
import location_logo from '../../Images/location-logo.png';
import search_icon from '../../Images/search-icon.png';
import us_flag from '../../Images/us-flag.png';
import amazon_cart from '../../Images/amazon-cart.png';
import { Link } from 'react-router-dom';

const Header = ({all_button}) => {

    const [{basket, user}] = useStateValue();
    const [username, setUsername] = useState('');

    const updateBasketLength = () => {
        if (basket.length < 10)
        {
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.fontSize= '1rem';
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.right= '40px';
        }
        else if (basket.length >= 10 && basket.length < 100)
        {
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.fontSize= '0.85rem';
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.right= '36px';
        }
        else if (basket.length > 99 && basket.length < 1000)
        {
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.fontSize= '0.75rem';
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.right= '34px';
        }
        else if (basket.length > 999)
            document.getElementsByClassName('shop')[0].getElementsByClassName('number')[0].style.fontSize= '0.65rem';
    }

    useEffect(() => {
        updateBasketLength();
    }, [basket.length])

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

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <img alt=''  src={amazon_logo} className='amazon-logo' height='27px'/>
                </Link>
                <div className='loc'>
                    <div>
                        <img alt=''  src={location_logo} className='loc-logo' height='18px'/>
                    </div>
                    <div>
                        <span className='deliver-to'>Deliver to</span>
                        <span className='location'><b>Lebanon</b></span>
                    </div>
                </div>
                <div className='input-buttons'>
                    <button>
                        {all_button}&#11167;
                    </button>
                    <input type='text' />
                    <button className='search-button'>
                        <img alt=''  src={search_icon} className='search-icon' />
                    </button>
                </div>
                <div className='lang'>
                    <img alt=''  src={us_flag} className='flag'/>
                    <div>&nbsp;&#11167;</div>
                </div>
                <div className='full-text'>
                    <span className='top-text'>Hello, {(user) ? username:'Sign In' }</span>
                    <span className='bottom-text'><b>Accounts & Lists &nbsp;&#11167;</b></span>
                </div>
                <div className='full-text'>
                    <span className='top-text'>Returns</span>
                    <span className='bottom-text'><b>& Orders</b></span>
                </div>
                    <Link to={!user ? '':'/my-cart'}>
                        <div className='shop'>
                            <div className='number'><b>{basket.length}</b></div>
                                <img alt=''  src={amazon_cart} className='cart' height='25px'/>
                            <div className='cart-text'><b>Cart</b></div>
                        </div>
                    </Link>
            </Content>
        </Wrapper>
    )
}

export default Header;
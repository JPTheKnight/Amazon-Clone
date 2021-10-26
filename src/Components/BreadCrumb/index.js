import React from 'react';

import { Wrapper, Content } from './BreadCrumb.styles';
import hamburger from '../../Images/hamburger.png';
import { Link } from 'react-router-dom';

const BreadCrumb = () => {

    const useShowSideMenu = () => {

        document.getElementsByClassName('slide')[0].style.margin = '0 0 0 420px';
        document.getElementsByClassName('slide')[0].style.transition = "all 0.5s ease-out";
        document.getElementsByClassName('x')[0].style.opacity='1';
        document.getElementsByClassName('x')[0].style.transition='0.5s';
    }

    return (
        <Wrapper>
            <Content>
                <div>
                    <span>
                        <img alt='' src={hamburger} className='hamburger'/>
                        <span onClick={useShowSideMenu}><b>All</b></span>
                    </span>
                    <Link to='/todays-deals'>
                        <span>Today's Deal</span>
                    </Link>
                    <span>Customer Service</span>
                    <span>Gift Cards</span>
                    <span>Registry</span>
                    <span>Sell</span>
                </div>
                <div>
                    <span><b>Amazon's response to COVID-19</b></span>
                </div>
            </Content>
        </Wrapper>
    )
}

export default BreadCrumb;
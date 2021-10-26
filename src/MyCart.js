import React from 'react';
import styled from 'styled-components';

import Header from './Components/Header'
import BreadCrumb from './Components/BreadCrumb';
import ToTop from './Components/ToTop';
import RightSide from './Components/MyCartComponents/RightSide';
import LeftSide from './Components/MyCartComponents/LeftSide';
import AllSlide from './Components/AllSlide';

const Wrapper = styled.div`
    background-color: #EAEDED;
    position: relative;
`;

const Body = styled.div`
    display: flex;
`;

const MyCart = () => {

    return (
        <Wrapper>
            <div className='slide'>
                <AllSlide />
            </div>
            <Header all_button='All'/>
            <BreadCrumb />
            <Body>
                <LeftSide />
                <RightSide />
            </Body>
            <ToTop />
        </Wrapper>
    )
}

export default MyCart;
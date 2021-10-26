import React from 'react';
import styled from 'styled-components';

import AllSlide from './Components/AllSlide';
import BigAdImage from './Components/BigAdImage';
import BreadCrumb from './Components/BreadCrumb';
import Grid from './Components/Grid';
import Header from './Components/Header'
import SignInRecom from './Components/SignInRecom';
import ToTop from './Components/ToTop';

import { useStateValue } from './StateProvider';

const Wrapper = styled.div`
    background-color: #EAEDED;
    position: relative;
`;

const Home = () => {

    const [{user}] = useStateValue();

    return (
        <Wrapper>
            <div className='slide'>
                <AllSlide />
            </div>
            <Header all_button='All'/>
            <BreadCrumb />
            <BigAdImage />
            <Grid />
            {!user && <SignInRecom />}
            <ToTop />
        </Wrapper>
    )
}

export default Home;
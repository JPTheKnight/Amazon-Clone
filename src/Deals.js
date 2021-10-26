import React from 'react';
import styled from 'styled-components';

import Header from './Components/Header'
import BreadCrumb from './Components/BreadCrumb';
import TopText from './Components/DealsComponents/TopText'
import DealsTable from './Components/DealsComponents/DealsTable';
import ToTop from './Components/ToTop'
import AllSlide from './Components/AllSlide';

const Wrapper = styled.div`
    position: relative;
`;

const Deals = () => {

    return (
        <Wrapper>
            <div className='slide'>
                <AllSlide />
            </div>
            <Header all_button='Deals'/>
            <BreadCrumb />
            <TopText />
            <DealsTable />
            <ToTop />
        </Wrapper>
    )
}

export default Deals;
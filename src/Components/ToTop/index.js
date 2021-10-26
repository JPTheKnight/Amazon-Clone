import React from 'react';

import { Wrapper } from './ToTop.styles';

const ToTop = () => {

    const toTop = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <Wrapper onClick={toTop}>
            <div className='top'></div>
            <div>Back to top</div>
        </Wrapper>
    )
}

export default ToTop;
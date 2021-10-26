import React from 'react';

import { Wrapper, Content } from './SignInRecom.styles';
import { Link } from 'react-router-dom';

const SignInRecom = () => {

    return (
        <Wrapper>
            <Content>
                <div className='rect'>
                    <div className='top-border'/>
                    <div className='inrect'>
                        <div className='see'>See personalized recommendations</div>
                        <Link to='/sign-in'>
                            <div className='signin-button'><button><b>Sign in</b></button></div>
                        </Link>
                        <div className='new'>New Customer? <a href='/'>Start here.</a></div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default SignInRecom;
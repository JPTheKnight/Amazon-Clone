import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import { db, auth, signInWithEmailAndPassword } from './Firebase';

import amazon_logo from './Images/amazon-logo-black.png';

const Wrapper = styled.div`
    height: 615px;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0px;
    a {text-decoration: none;}

    .logo{
        margin: 15px auto;
    }

    .new-to-amazon-container{
        width: 350px; 
        height: 12px; 
        border-bottom: 1px solid #E7E7E7; 
        color: #767676;
        text-align: center;
        margin-bottom: 15px;
    }

    .new-to-amazon{
        font-size: 0.7rem; 
        background-color: white; 
        padding: 0 10px;
    }

    .signin-panel{
        border: 1px solid #DDDDDD;
        border-radius: 5px;
        width: 350px;
        height: 280px;
        text-align: left;
        margin-bottom: 30px;

        .signin-panel-items{
            margin-left: 20px;

            h2{
                font-weight: 300;
            }

            .email-submitted{
                margin-top: -5px;
                margin-bottom: 15px;
                font-size: 0.8rem;
            }

            .email-text{
                font-size: 0.8rem;
                margin-bottom: 5px;
            }

            input{
                width: 90%;
                height: 25px;
                margin-bottom: 15px;
            }

            button{
                width: 92.5%;
                height: 30px;
                border-radius: 4px;
                outline: none;
                border-width: 1px;
                border-color: #E6A400;
                background: linear-gradient(to bottom, rgb(255,216,114) 40%, rgb(255,207,86) 41%, rgb(255,195,40) 100%);
                :hover{
                    cursor: pointer;
                }
            }

            p{
                margin-top: 30px;
                font-size: 0.75rem;
                width: 300px;
            }

            .checkbox{
                display: flex;
                font-size: 0.8rem;
                margin-top: 25px;

                input{
                    width: 12px;
                    margin-top: -5px;
                }
            }
        }
    }

    .signup{
        width: 350px;
        height: 30px;
        border-radius: 4px;
        outline: none;
        border-width: 1px;
        border-color: #A2A6AC;
        background: linear-gradient(to bottom, rgb(252,252,253) 40%, rgb(240,241,244) 41%, rgb(218,221,226) 100%);
        :hover{
            cursor: pointer;
        }
    }

    .bottom-panel{
        border-top: 2px solid #E8E8E8;
        height: 100%;
        margin-top: 25px;
        width: 100%;
        box-shadow: 0px 86px 56px -47px rgba(179,179,179,0.75) inset;
        -webkit-box-shadow: 0px 86px 56px -47px rgba(179,179,179,0.75) inset;
        -moz-box-shadow: 0px 86px 56px -47px rgba(179,179,179,0.75) inset;

        .privacy-shit{
            margin-top: 20px;
            display: flex;
            justify-content: center;
            font-size: 0.7rem;

            span{
                margin-right: 35px;
            }

            span:last-child{
                margin-right: 0;
            }
        }

        .copyright{
            margin-top: 15px;
            font-size: 0.7rem;
        }
    }
`;

const SignIn = () => {

    const [enteredEmail, setEnteredEmail] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const enterEmail = () => {
        if (document.getElementsByClassName('email-input')[0].value !== '')
        {
            setEmail(document.getElementsByClassName('email-input')[0].value);
            setEnteredEmail(true);
        }
    }

    const login = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth)
            {
                history('/');
            }
        }).catch(error => {alert(error.message)});
    }

    return (
        <Wrapper>
            <div className='logo'><img src={amazon_logo} height='30px' alt=''/></div>
            <div className='signin-panel'>
                {!enteredEmail &&
                <div className='signin-panel-items'>
                    <h2>Sign-In</h2>
                    <div className='email-text'><b>Email or mobile phone number</b></div>
                    <input type="email" className='email-input'/>
                    <div className='signin-button-container'><button className='signin-button' onClick={enterEmail}>Continue</button></div>
                    <p>By continuing, you agree to Amazon's <a href='/'>Conditions of Use</a> and <a href='/'>Privacy Notice.</a></p>
                </div>}
                {enteredEmail && 
                <div className='signin-panel-items'>
                    <h2>Sign-In</h2>
                    <div className='email-submitted'>{email} <Link to='/sign-in'>Change</Link></div>
                    <div className='email-text'><b>Password</b></div>
                    <input type="password" className='password-input' onChange={e => setPassword(document.getElementsByClassName('password-input')[0].value)}/>
                    <div className='signin-button-container'>
                        <button type='submit' className='signin-button' onClick={login}>Sign in</button>
                    </div>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <span>Keep me signed in</span>
                    </div>
                </div>}
            </div>
            {!enteredEmail && <div className='new-to-amazon-container'>
                <span className='new-to-amazon'>
                    New to Amazon? 
                </span>
            </div>}
            {!enteredEmail && <div><Link to='/sign-up'><button className='signup'>Create your Amazon account</button></Link></div>}
            <div className='bottom-panel'>
                <div className='privacy-shit'>
                    <span><a href='/'>Conditions of Use</a></span>
                    <span><a href='/'>Privacy Notice</a></span>
                    <span><a href='/'>Help</a></span>
                </div>
                <div className='copyright'>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
            </div>
        </Wrapper>
    )
}

export default SignIn;
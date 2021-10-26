import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import { db, auth, createUserWithEmailAndPassword } from './Firebase';
import { ref, set } from "firebase/database";

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
        height: 500px;
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

            .text{
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
                margin-top: 20px;
                font-size: 0.75rem;
                width: 300px;
            }
        }
    }

    .bottom-panel{
        border-top: 2px solid #E8E8E8;
        height: 100%;
        margin-top: 25px;
        padding-bottom: 45px;
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

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    const enterInfo = e => {

        e.preventDefault();

        if (document.getElementsByClassName('input')[0].value !== '' && document.getElementsByClassName('input')[1].value !== '' && document.getElementsByClassName('input')[2].value !== '' && document.getElementsByClassName('input')[3].value !== '' && document.getElementsByClassName('input')[2].value === document.getElementsByClassName('input')[3].value)
        {
            setName(document.getElementsByClassName('input')[0].value);
            setEmail(document.getElementsByClassName('input')[1].value);
            setPassword(document.getElementsByClassName('input')[2].value);
        }
        else
        {
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth)
            {
                writeUserData(auth.user.uid, name);
                history('/');
            }
        }).catch(error => {alert(error.message)});
    }

    const writeUserData = (userId, name) => {
        console.log(userId + " " + name);
        set(ref(db, 'users/' + userId), {
          username: name,
        }).then(() => {console.log("Done");}).catch(error => {
            alert(error.message);
        });
      }

    return (
        <Wrapper>
            <div className='logo'><img src={amazon_logo} height='30px' alt=''/></div>
            <div className='signin-panel'>
                <div className='signin-panel-items'>
                    <h2>Create Account</h2>
                    <div className='text'><b>Your name</b></div>
                    <input type="text" className='input'/>
                    <div className='text'><b>Email</b></div>
                    <input type="email" className='input'/>
                    <div className='text'><b>Password</b></div>
                    <input type="password" placeholder='At least 6 characters' className='input'/>
                    <div className='text'><b>Re-enter Password</b></div>
                    <input type="password" className='input'/>
                    <div className='signin-button-container'><button className='signin-button' onClick={enterInfo}>Create your Amazon account</button></div>
                    <p>By continuing, you agree to Amazon's <a href='/'>Conditions of Use</a> and <a href='/'>Privacy Notice.</a></p>
                    <p>Already have an account? <Link to='/sign-in'>Sign-In</Link></p>
                </div>
            </div>
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

export default SignUp;
import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 60px;
    background-color: #131921;
    color: white;
    min-width: 1280px;

    a{
        text-decoration: none;
    }
`;

export const Content = styled.div`
    justify-content: space-between;
    display: flex;

    .amazon-logo{
        margin: 17px 0 15px 15px;

        :hover{
            cursor: pointer;
        }
    }

    div{
        :hover{
            cursor: pointer;
        }
    }

    span{
        float: left;
        clear: left;
    }

    .loc{
        display: flex;
        margin: 12px 0;
    }

    .deliver-to{
        font-size: 0.75rem;
        color: #CCCCCC;
    }

    .location{
        font-size: 0.85rem;
    }

    .loc-logo{
        margin: 14px 4px 0 0;
    }

    .input-buttons{
        display: flex;
        margin: 10px 0;
        height: 40px;
        width: 57%;

        input{
            width: 100%;
            outline: none;
            border: none;
            font-size: 1rem;
        }

        button{
            width: 50px;
            outline: none;
            border: none;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
            font-size: 0.7rem;
            white-space: nowrap;

            :hover{
                opacity: 0.8;
                cursor: pointer;
            }
        }

        .search-button{
            background-color: #F3A847;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
        }

        .search-icon{
            margin: auto auto;
            height: 18px;
        }
    }

    .lang{
        display: flex;
        margin: 5px 0 0 0;
        align-items: center;

        .flag{
            height: 15px;
            margin: 0 4px 0 0;
        }
    }

    .top-text{
        font-size: 0.75rem;
    }

    .bottom-text{
        font-size: 0.85rem;
    }

    .full-text{
        margin: 12px 0px 0 0;
    }

    .number{
        color: #F07019;
        position: absolute;
        top: 10px;
    }

    .shop{
        display: flex;
        margin: 0 15px 0 0;
        position: relative;

        color: white;

        .number{
            color: #F07019;
            position: absolute;
            top: 10px;
            right: 40px;
        }

        .cart-text{
            font-size: 0.85rem;
            margin: 26px 0 0 1px;
        }

        .cart{
            margin-top: 18px;
        }
    }
`;

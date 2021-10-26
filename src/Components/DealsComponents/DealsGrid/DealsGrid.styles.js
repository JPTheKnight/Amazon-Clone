import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
    display: grid;
    padding-left: 14px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 263px));
    grid-gap: 0px;
`;

export const Cell = styled.div`
    background-color: white;
    border: #DDDDDD 1px solid;
    display: flex;
    flex-flow: column;
    position: relative;

    height: 520px;
    max-width: 400px;

    img{
        margin-top: 20px;
        height: 175px;
        max-width: 250px;
        object-fit: contain;
    }

    .text{
        text-align: left;
        margin-left: 30px;

        a{
            text-decoration: none;
        }
    }

    .deal-otd{
        margin-top: 60px;
        color: white;
        font-size: 0.7rem;
        position: relative;
        z-index: 1;

        p{
            background-color: #C45500;
            width: 110px;
            padding: 0px 0px 0px 5px;
            border-top: 20px solid #C45500;
            border-right: 5px solid white;
        }

        span{
            position: absolute;
            top: 2px;
            left: 5px;
        }
    }

    .price{
        margin-top: 5px;
        font-size: 1.1rem;
        color: #CC3139;
    }

    .price-no-discount{
        margin-top: 90px;
        font-size: 1.1rem;
        color: #CC3139;
    }

    .old-price{
        margin-top: 5px; 
        font-size: 0.8rem;
    }

    .product-name{
        margin-top: 5px; 
        font-size: 0.8rem;
    }

    .full-rate{
        margin-top: 5px; 
        font-size: 0.9rem;
    }

    .rating{
        font-size: 0.75rem;
    }

    .already-in-cart{
        position: absolute;
        bottom: 60px;
        left: 75px;
        border: 1px solid red;
        padding: 5px;
        color: red;
        font-size: 0.8rem;

        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        }
        @-webkit-keyframes fadeInUp {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        }
        100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
        }
        }
        @keyframes fadeInUp {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        }
        100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
        }
    } 

    .cart{
        position: absolute;
        bottom: 20px;
        left: 40px;
        .cart-butt{
            width: 180px;
            height: 30px;
            outline: none;
            border: none;
            background-color: #FFD814;
            border-radius: 8px;
            border-style: solid;
            border-color: #FFD814;

            :hover{
                cursor: pointer;
                background-color: #e3c010;
                border-color: #e3c010;
            }
        }
    }
`;
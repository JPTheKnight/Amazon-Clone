import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    margin: 0 20px;
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 20px;
`;

export const Content = styled.div`
    margin-top: -350px;
    margin-left: -14px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    max-width: 1200px;

    .signin{
        height: 150px;

        .amazon-ships{
            margin: 50px 3px 0 3px;
        }

        :hover{
            cursor: pointer;
        }
    }
`;

export const Cell = styled.div`
    width: 312px;
    height: 420px;
    background-color: white;

    @media (max-width: 1280px)
    {
        width: 309px;
        height: 417px;
    }

    div{
        float: left; 
    }
    
    .title{
        margin-left: 16px;  
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 1.25rem;
        letter-spacing: 1px;
    }

    .signin-title{
        margin-bottom: 15px;
        font-size: 1.3rem;
        letter-spacing: 1px;
    }

    .product-image{
        margin-bottom: 15px;
        margin-left: 16px; 

        img{
            object-fit: cover;

            :hover{
                cursor: pointer;
            }
        }
    }

    .link{
        margin-left: 16px; 
        font-size: 0.8rem;
        text-decoration: none;
    }

    p span{
        display: block;
        float: left;
        clear: left;
        margin-left: 20px;
    }

    .signin-button{
        margin: 0 18px;

        button{
            height: 30px;
            width: 270px;
            outline: none;
            border: none;
            background-color: #FFD814;
            border-radius: 8px;

            :hover{
                opacity: 0.9;
                cursor: pointer;
            }
        }
    }

    .grid{
        margin: 0 0 20px 0;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-row-gap: 15px;

        .cells{
            margin: 0;

            img{
                object-fit: cover;

                :hover{
                    cursor: pointer;
                }
            }

            .icon{
                margin-left: 15px;
                margin-bottom: 8px; 
                justify-content: center;
            }

            .type{
                margin-left: 15px;
                font-size: 0.75rem;
            }
        }
    }
`;

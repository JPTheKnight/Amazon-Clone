import styled from "styled-components";

export const Wrapper = styled.div`
    width: 325px;
`;

export const Content = styled.div`

    .checkout-bg{
        background-color: white;
        margin: 15px 20px 20px 20px;
        height: 107px;

        .subtotal{
            padding: 20px 0 5px 0;
            font-size: 1.05rem;
        }

        button{
            background-color: #FFD814;
            outline: none;
            border: none;
            border-radius: 10px;
            height: 30px;
            width: 220px;

            :hover{
                cursor: pointer;
                background-color: #e3c010;
            }
        }
    }

    .recommendations{
        background-color: white;
        margin: 0px 20px 20px 20px;
        border-radius: 8px;
        border: #D5D9D9 solid 1px;

        .text{

            text-align: left;
            font-size: 0.85rem;
            padding: 15px 10px 15px 5px;
            margin-left: 15px;
        }

        .row{
            margin-bottom: 15px;
            display: flex;
            text-align: left;

            .infos{
                padding-left: 10px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;

                a{
                    text-decoration: none;
                }
            }

            img{
                margin-left: 20px;
            }

            .title{
                font-size: 0.85rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }

            .company{
                font-size: 0.7rem;
            }

            .rating{
                font-size: 0.7rem;
            }

            .price{
                font-size: 0.9rem;
                color: #B82704;
            }

            button{
                margin-top: 15px;
                background-color: #FFD814;
                outline: none;
                border: none;
                border-radius: 5px;
                height: 20px;
                width: 75px;
                font-size: 0.7rem;

                :hover{
                    cursor: pointer;
                    background-color: #e3c010;
                }
            }
        }

        .row:last-child{
            margin-bottom: 30px;
        }
    }
`;
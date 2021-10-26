import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;

    a{
        text-decoration: none;
    }
`;

export const Content = styled.div`

    .shopping-cart{
        background-color: white;
        margin: 30px 0px 20px 20px;
        min-height: 135px;

        .title{
            text-align: left;
            margin: 20px 0 0 20px;
            padding-top: 20px;
            font-size: 1.8rem;
        }

        .deselect{
            text-align: left;
            margin: 0px 0 0 20px;
            font-size: 0.9rem;
        }

        .price-title{
            text-align: right;
            margin-right: 20px;
            font-size: 0.85rem;
            color: #6C706E;
        }

        hr{
            border-top: 1px solid #DDDDDD;
            margin-top: 0;
            margin-left: 20px;
            margin-right: 20px;
        }

        .subtotal{
            text-align: right;
            margin: 0px 20px 0 0px;
            padding-bottom: 40px;
        }
    }

    .your-items{
        background-color: white;
        margin: 10px 0px 20px 20px;
        min-height: 160px;

        .title{
            text-align: left;
            margin: 20px 0 0 20px;
            padding-top: 20px;
            font-size: 1.8rem;
        }

        hr{
            border-top: 1px solid #DDDDDD;
            margin-top: 8px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .options{
            margin-top: 20px;
            font-size: 0.9rem;
            text-align: left;
            margin-left: 40px;
            
            span{
                margin-right: 25px;

                :hover{
                    cursor: pointer;
                }
            }

            .items-saved{
                color: #007185;
            }

            .items-saved-pressed{
                font-weight: 700;
                border-bottom: 2px solid #E47911;
                padding-bottom: 8px;
                padding-right: 10px;
                padding-left: 10px;
            }

            .buy-again{
                color: #007185;
            }

            .buy-again-pressed{
                font-weight: 700;
                border-bottom: 2px solid #E47911;
                padding-bottom: 8px;
                padding-right: 10px;
                padding-left: 10px;
            }
        }

        .items-to-buy-again{
            text-align: left;
            margin-left: 20px;
            font-size: 0.9rem;
        }
    }

    .bottom-text{
        font-size: 0.75rem;
        margin: 10px 0px 20px 20px;
        width: 95%;

        p{
            text-align: left;
            margin: 1px;
        }
    }
`;

export const Cell = styled.div`
    position: relative;

    .item{
        display: flex;
        text-align: left;
        
        .checkbox{
            margin: auto 0 auto 20px;

            input{
                height: 15px;
                width: 15px;
            }
        }

        img{
            margin: 20px 0 20px 19px;
            height: 100px;
            object-fit: contain;
        }

        .infos{
            position: absolute;
            left: 250px;
        }

        .product-name{
            font-size: 1.1rem;
            width: 75%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .number-in-stock{
            margin-top: 5px;
            font-size: 0.75rem;
            color: #B82704;
        }

        .shipped-from{
            margin-top: 5px;
            font-size: 0.75rem;
            color: #565959;
        }

        .gift-options{
            margin-top: 5px;
            font-size: 0.75rem;
            color: #565959;
        }

        .options{
            span{
                margin-right: 15px;
                font-size: 0.75rem;
                border-right: 1px solid #DDDDDD;
                padding-right: 15px; 
            }

            span:last-child{
                border-right: none;
            }

            .delete{
                cursor: pointer;
                color: #007185;
            }
        }

        .price{
            position: absolute;
            right: 20px;
            font-size: 1.1rem;
        }
    }
`;
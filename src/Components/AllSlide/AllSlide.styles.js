import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    margin: 0;
    z-index: 2;
    height: 100%;
    margin-left: -420px;

    .x{
        position: absolute;
        opacity: 0;
        color: black;
        font-size: 1.8rem;
        top: 10px;
        left: 103%;
        font-weight: 700;

        :hover{
            cursor: pointer;
        }
    }
`;

export const Content = styled.div`
    height: 100%;
    overflow-y: auto;

    .profile{
        background-color: #232F3E;
        display: flex;
        width: 360px;

        img{
            height: 25px;
            margin: 12px 0 10px 35px;
        }

        .hello{
            font-weight: 700;
            font-size: 1.1rem;
            color: white;
            margin: 15px 10px 10px 15px;
            letter-spacing: 1px;
            padding-right: 140px;
            white-space: nowrap;
        }
    }

    .content-manager{
        display: flexbox;
        overflow-y: auto;
        overflow-x: hidden;
        max-width: 360px;
    }

    .content{
        background-color: white;
        height: 100%;
        min-height: 2000px;
        width: 360px;
        margin-left: 0px;

        text-align: left;

        .title{
            padding: 20px 0 5px 35px;
            font-size: 1.1rem;
        }

        .type{
            padding: 15px 0 15px 35px;
            margin: 0;
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;

            :hover{
                background-color: #EAEBEB;
                cursor: pointer;
            }

            img{
                height: 10px;
                margin-right: 30px;
            }
        }

        .see-all{
            padding: 15px 0 0px 35px;
            margin: 0;
            font-size: 0.8rem;
            display: flex;

            :hover{
                background-color: #EAEBEB;
                cursor: pointer;
            }

            .arrow{
                transform: rotate(90deg);
            }

            img{
                height: 10px;
                margin-bottom: 10px;
                margin-right: 10px;
            }
        }

        hr{
            border-top: 1px solid #D5DBDB;
        }

        .department{
            .additional{
                display: none;
            }

            .additional-shown{
                hr{
                    margin-left: 30px;
                    margin-right: 30px;
                }
            }
        }
    }

    .content-information{
        background-color: white;
        width: 360px;

        text-align: left;

        .main-menu{
            .main-menu-text{
                padding: 20px 0 5px 35px;
                font-size: 0.9rem;
            }

            :hover{
                background-color: #EAEBEB;
                cursor: pointer;
            }
        }

        .title{
            padding: 5px 0 5px 35px;
            font-size: 1.1rem;
        }

        .type{
            padding: 15px 0 15px 35px;
            margin: 0;
            font-size: 0.8rem;
            display: flex;
            justify-content: space-between;

            :hover{
                background-color: #EAEBEB;
                cursor: pointer;
            }

            img{
                height: 10px;
                margin-right: 30px;
            }
        }
    }
`;
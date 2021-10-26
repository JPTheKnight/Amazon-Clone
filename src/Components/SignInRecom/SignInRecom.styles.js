import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    height: 190px;
    min-width: 1280px;

    a{
        text-decoration: none;
    }
`;

export const Content = styled.div`
    font-size: 0.8rem;

    .top-border{
        padding-bottom: 40px;
    }

    .rect{
        
        .inrect{
            border-color: #DDDDDD;
            border-width: 0.1px;
            border-style: solid;
            height: 125px;

            div{
                margin: 5px;
            }

            .see{
                margin: 40px 0 0 0;
            }

            button{
                font-size: 0.8rem;
                height: 25px;
                width: 225px;
                border-radius: 4px;
                outline: none;
                border-width: 1px;
                border-color: #E6A400;
                background: linear-gradient(to bottom, rgb(255,216,114) 40%, rgb(255,207,86) 41%, rgb(255,195,40) 100%);

                :hover{
                    cursor: pointer;
                }
            }

            .new{
                font-size: 0.7rem;
            }
        }
    }

`;
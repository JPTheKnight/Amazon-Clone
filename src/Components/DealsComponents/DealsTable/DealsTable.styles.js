import styled from "styled-components";

export const Wrapper = styled.div`
   
`;

export const Content = styled.div`
    .top-text{
        display: flex;
        justify-content: space-between;
        margin: 35px 35px 0 35px;
        font-size: 0.85rem;
        position: relative;

        .featured{
            span{
                margin-right: 10px;
            }

            button{
                height: 20px;
                width: 150px;
                padding-right: 100px; 
                font-size: 0.7rem;
                border-radius: 7px;
                border: solid 1px #D0D4D4;
                outline: none;
                box-shadow: 0px 3px 7px -2px rgba(184,184,184,0.75);
                -webkit-box-shadow: 0px 3px 7px -2px rgba(184,184,184,0.75);
                -moz-box-shadow: 0px 3px 7px -2px rgba(184,184,184,0.75);
                white-space: nowrap;

                :hover{
                    background-color: lightgray;
                    cursor: pointer;
                }
            }

            .dropdown-disabled{
                display: none;
            }

            .dropdown{
                z-index: 2;
                display: block;
                position: absolute;
                background: white;
                text-align: left;
                width: 173px;
                height: 170px;
                box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
                top: 0;
                right: 10px;
                border-radius: 3px;

                div{

                    :hover{
                        border: #D5D9D9 solid 1px;
                        width: 90%;
                        height: 25px;
                        background-color: #F5F5F5;
                        cursor: pointer;
                    }
                }

                div:first-child{
                    margin-top: 5px;
                }
            }

            .dropdown-chosen-sort{
                border: #0044a3 solid 1px;
                padding-left: 10px;
                padding-top: 5px;
                margin-bottom: 0px;
                font-size: 0.75rem;
                height: 25px;
                width: 90%;
                height: 25px;
                background-color: #EDFDFF;
                cursor: pointer;
            }

            .dropdown-not-chosen-sort{
                padding-left: 10px;
                padding-top: 5px;
                margin-bottom: 0px;
                font-size: 0.75rem;
                border: white solid 1px;
                height: 25px;
            }
        }
    }

    .body-table{
        margin: 10px 20px 0 20px;
        background-color: #F5F5F5;
        min-height: 1044px;

        .left-side{
            div{
                float: left;
                clear: left;
                margin: 5px 0 0 20px;
            }
            font-size: 0.85rem;

            input{
                margin-right: 5px; 
            }

            .title{
                margin: 15px 0 0 20px;
            }
        }
    }


`;


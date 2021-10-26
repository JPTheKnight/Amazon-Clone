import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 1280px;
    margin: 0 auto;
`;

export const Content = styled.div`

    .container{
        position: relative;
        max-width: 1360px;
        margin: 0 auto;
        overflow: hidden;

        .slider{
            display: flex;
            //animation: 60s slider infinite;

            @keyframes slider{
                0%{
                    margin-left: 0;
                }
                8%{
                    margin-left: 0;
                }
                16%{
                    margin-left: -1360px;
                }
                27%{
                    margin-left: -1360px;
                }
                34%{
                    margin-left: -2720px;
                }
                42%{
                    margin-left: -2720px;
                }
                50%{
                    margin-left: -4080px;
                }
                58%{
                    margin-left: -4080px;
                }
                67%{
                    margin-left: -5440px;
                }
                75%{
                    margin-left: -5440px;
                }
                83%{
                    margin-left: -6800px;
                }
                91%{
                    margin-left: -6800px;
                }
                100%{
                    margin-left: -8160px;
                }
            }
        }

        .back{
            position: absolute;
            top: 2px;
            left: 2px;

            :hover{
                top: 0px;
                left: 0px;
                border: solid white 2px;
            }
        }

        .next{
            position: absolute;
            top: 2px;
            right: 2px;

            :hover{
                top: 0px;
                right: 0px;
                border: solid white 2px;
            }
        }
    }

    img{
        :hover{
            cursor: pointer;
        }
    }
`;

export const Image = styled.img`
    object-fit: cover;
    height: 600px;
    width: 1360px;
    max-width: 1360px;
    min-width: 1280px;
    margin: 0 auto;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
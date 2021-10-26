import styled from "styled-components";

export const Wrapper = styled.div`
    height: 40px;
    background-color: #232F3E;
    color: white;
    min-width: 1280px;

    a{
        text-decoration: none;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    div{
        margin: 9px 15px;
        text-decoration: none;

        span{
            text-decoration: none;
            color: white;
            user-select: none;
        }
    }
    
    span{
        margin: 0 7px;
        font-size: 0.85rem;
        
        :hover {
            cursor: pointer;
        }
    }

    .hamburger{
        height: 10px;
    }
`;
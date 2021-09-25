import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    margin: 1rem 1rem 0;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.darkGray};

    h1{
        margin: 2rem 1rem;
        span{
            color: ${({theme}) => theme.colors.purple};
        }
    }
    p{
        text-align: center;
        font-size: 22px;
        span{
            font-size: 18px;
            color: ${({theme}) => theme.colors.gray};
        }
    }
    @media (max-width: 768px) {
        h1{
            font-size: 26px;
            margin: 1.5rem;
        }
        p{
            font-size: 16px;
            span{
                font-size: 14px;
            }
        }
    }
`
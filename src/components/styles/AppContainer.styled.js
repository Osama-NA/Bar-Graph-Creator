import styled from 'styled-components';

export const AppContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    
    width: 100vw;
    max-width: 750px;
    color: ${({theme}) => theme.font.color};
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0.5px;

    .download-btn{
        margin: 1.5rem 0 2.5rem;
        color: ${({ theme }) => theme.font.color};
        cursor: pointer;
        font-size: 18px;
        padding: 0.8rem 1.6rem;
        border-radius: 13px;
        letter-spacing: 1px;
        transition: all 0.3s;
        background-color: ${({ theme }) => theme.colors.purple};
        transition: all 0.3s;
    }
    .download-btn:hover{
        background-color: ${({ theme }) => theme.input.hoverBackgroundColor};
    }
    @media (max-width: 768px) {
      .download-btn{
            margin: 1rem 0 2rem;
            font-size: 12px;
            padding: 0.6rem 1.2rem;
            border-radius: 10px;
        }
    }
`
import styled from 'styled-components';

export const AppContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    
    width: 100vw;
    max-width: 1000px;
    min-height: 100vh;
    color: ${({theme}) => theme.font.color};
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0.5px;
`
import styled from 'styled-components';

export const GraphFormContainer = styled.div`
    width: 100%;
    margin: 1rem 1rem 0;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.darkGray};

    h2{
        margin: 2rem 0 3rem;
        span{
            color: ${({ theme }) => theme.colors.purple}
        }
    }
    form{
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .form-row{
            margin-bottom: 2rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            input{
                font-size: 16px;
                color: ${({ theme }) => theme.font.color};
                padding: 0.5rem;
                border: none;
                outline: none;
                border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
                border-radius: 5px 5px 0 0;
                background-color: ${({ theme }) => theme.input.backgroundColor};
            }
            label{
                width:42%;
                color: ${({ theme }) => theme.colors.lightGray};
            }
            .range{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                input{
                    width: 45%;
                    text-align: center;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
            .title{
                width: 100%;
                input{
                    width: 100%;
                }
            }
            .bars-number{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                input{
                    width: 72.5%;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                button{
                    cursor: pointer;
                    color: ${({ theme }) => theme.font.color};
                    font-size: 16px;
                    width: 22.5%;
                    border-radius: 5px;
                    background-color: ${({ theme }) => theme.colors.purple};
                    transition: all 0.3s;
                }
                button:hover, button:active{
                    background-color: ${({ theme }) => theme.input.hoverBackgroundColor};
                }
            }
        }
        ul{
            width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            li{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem; 
                input{
                    text-align: center;
                    width: 46%;
                    font-size: 16px;
                    color: ${({ theme }) => theme.font.color};
                    padding: 0.5rem;
                    border: none;
                    outline: none;
                    border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
                    border-radius: 5px 5px 0 0;
                    background-color: ${({ theme }) => theme.input.backgroundColor};
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
        }
        .buttons-row{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2.5rem;
            button{
                width: 45%;
                color: ${({ theme }) => theme.font.color};
                cursor: pointer;
                font-size: 18px;
                padding: 0.5rem;
                border-radius: 5px;
                letter-spacing: 1px;
                transition: all 0.3s;
                background-color: transparent;
                border: 2px solid ${({ theme }) => theme.colors.purple};
                transition: all 0.3s;
            }
            .create{
                background-color: ${({ theme }) => theme.colors.purple};
            }
            .create:hover{
                background-color: ${({ theme }) => theme.input.hoverBackgroundColor};
            }
        }
    }
`
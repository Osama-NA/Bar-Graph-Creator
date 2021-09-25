import styled from "styled-components";

export const BarGraphContainer = styled.div`
    width: 100%;
    margin: 1rem;
    padding: 1rem 0 3.5rem;
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
    .graph{
        position: relative;
        width: 500px;
        height: 450px;
        border: 5px solid rgb(216 216 216);
        border-top: none;
        border-right: none;
        border-radius: 0 0 0 15px;

        .min, .max{
            position: absolute;
            left: -6rem;
            display:flex;
            flex-direction: row;
            align-items: center;
            label{
                font-size: 14px;
                color: #757575;
            }
            p{
                font-size: 14px;
                text-align: center;
                margin-left: 0.6rem;
                padding:0.2rem;
                min-width: 35px;
                width: auto;
                border-radius: 5px;
                background-color: #944bff;
            }
        }
        .max{
            top: 0;
        }
        .min{
            bottom: 0;
        }
    }
`
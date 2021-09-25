import styled from "styled-components";

export const BarGraphContainer = styled.div`
    width: 100%;
    height: 750px;
    margin: 1rem;
    padding: 1rem 0 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
        margin-left: 2rem;

        .min, .max, .consumers{
            position: absolute;
            left: -6rem;
            display:flex;
            flex-direction: row;
            align-items: center;
            label{
                font-size: 14px;
                color: rgb(102 102 102);
            }
            p{
                color: rgb(255 255 255);
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                margin-left: 0.6rem;
                padding:0.2rem;
                min-width: 35px;
                width: auto;
                border-radius: 5px;
                background-color:  rgb(145 70 255);
                box-shadow: inset 1px 1px 4px 0px #282828;
                text-shadow: 1px 1px 3px #282828;
            }
        }
        .max{
            top: 0;
        }
        .min{
            bottom: 0;
        }
        .consumers{
            left: -5rem;
            font-size: 18px;
            font-weight: lighter;
            top: 45%;
            transform: rotate(270deg);
        }

        @keyframes expand{
            0%{
                height: 0%;
            }
        }

        .bars{
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-end;
            padding: 0 0 1.8rem 1.8rem;

            .bar{
                position: relative;
                width: 40px;
                margin-right: 1.8rem;
                border-radius: 6px 6px 0 0;
                background-color: ${({ theme }) => theme.colors.purple};
                box-shadow: inset 1px 1px 8px 0px #393939;
                animation-name: expand;
                animation-duration: 0.8s;
                animation-timing-function: linear;

                .type, .amount{
                    text-align: center;
                    width: -webkit-fill-available;
                    position: absolute;
                }
                .type{
                    color: rgb(163 163 163);
                    bottom: -6rem;
                    transform: rotate(90deg);
                    font-weight: lighter;
                }
                .amount{
                    top: -1.5rem;
                }
            }
            .bar:nth-last-child(1){
                margin-right: 0;
            }
        }
    }
    @media (max-width: 768px){
        height: 430px;
        padding: 1rem;

        h2{
            font-size: 16px;
            margin: 1rem 0 2rem;
        }
        .graph{
            width: 225px;
            height: 225px;
            border: 2.5px solid rgb(216 216 216);
            border-top: none;
            border-right: none;
            border-radius: 0 0 0 10px;
            margin-left: 4rem;

            .min, .max, .consumers{
                left: -4rem;
                label{
                    font-size: 10px;
                }
                p{
                    font-size: 9px;
                    margin-left: 0.6rem;
                    padding: 0.1rem 0.2rem;
                    min-width: 20px;
                    width: auto;
                    border-radius: 5px;
                    background-color:  rgb(145 70 255);
                    box-shadow: inset 1px 1px 4px 0px #282828;
                    text-shadow: 1px 1px 3px #282828;
                }
            }
            .max{
                top: 0;
            }
            .min{
                bottom: 0;
            }
            .consumers{
                left: -3.2rem;
                font-size: 12px;
            }

            .bars{
                padding: 0 0 1rem 1rem;

                .bar{
                    width: 20px;
                    margin-right: 1rem;
                    border-radius: 5px 5px 0 0;
                    box-shadow: inset 1px 1px 6px 0px #393939;
                    animation-name: expand;
                    animation-duration: 0.8s;
                    animation-timing-function: linear;

                    .type, .amount{
                        font-size: 10px;
                    }
                    .type{
                        bottom: -3.5rem;
                    }
                }
            }
        }
    }
`
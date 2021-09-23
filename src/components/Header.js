import React from 'react';
import {HeaderContainer} from './styles/HeaderContainer.styled'

export const Header = () => {
    return (
        <HeaderContainer>
            <h1><span>Bar</span> graph<span>.</span></h1>
            <p>Create a bar graph with a click<br /><span>First just fill in the required details</span></p>
        </HeaderContainer>
    )
}

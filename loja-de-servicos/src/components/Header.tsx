/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'


const Container = styled.header`
    background-color: blue;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-shadow: 2px 2px 4px black;
  
    @media(max-width: 600px){
      font-size: 20px;
      padding: 10px;      
    }
`



interface HeaderProps{
    leftIcon:any
    title:string
    rightIcon:any
}

export default function Header({ leftIcon, title, rightIcon }:HeaderProps):JSX.Element{
    return(
        <Container>
            {leftIcon}
            <h1>{title}</h1>
            {rightIcon}
        </Container>
    )
}
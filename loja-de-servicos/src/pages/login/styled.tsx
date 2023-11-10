import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

    .form{        
        padding-top: 10vh;
    }

    .fieldset{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
        border-radius: 5px;
        box-shadow: 2px 2px 4px #fff;
        border: 1px solid #fff;
    }

    .input{
        height: 30px;
        width: 25vw;
        background: transparent;
        color: whitesmoke;
        font-size: 1rem;
        border-radius: 10px;
        padding-left: 10px;
        margin: 10px;
    }

    .input::placeholder {
        color: rgb(255, 255, 255, 0.3);
    }

    .btnContainer{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 30vw;
        padding-top: 20px;
    }

    .button{
        background: rgb(15, 15, 47);
        padding: 10px;
        border: none;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }

    .button:hover{
        background-color: blue;
        box-shadow: 0 0 4px #fff;
    }

    .button:active{
        transform: scale(.9);
    }

    .imgContainer{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px;
        cursor: pointer;
        background-color: #fff;
        padding: 5px;
        border-radius: 5px;
        color: black;
        width: 50%;
        margin: auto;
    }
    
/* MEDIA QUERY */
    @media(max-width: 500px){
        .form{
            width: 80vw;
        }

        .input{
            width: 70%;
        }

        .btnContainer{
            width: 90%;
        }
    }

    @media(max-width: 1200px){
        .form{
            width: 40vw;
        }

        .input{
            width: 70%;
        }

        .btnContainer{
            width: 90%;
        }
    }

    
`
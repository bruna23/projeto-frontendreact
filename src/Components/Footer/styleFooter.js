import styled from 'styled-components'

export const MainFooter = styled.div`
    background-color: black;
    width: 1350px;
    color: white;

    .footer-dados{
        display: flex;
        justify-content: space-evenly;
        height: 50vh;
        width: 100%;
        padding-top: 12px;
        align-items: center;
    }
      @media screen and (max-device-width: 300px){
      width: 1300px;
    } 

    .footerpar{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }
    .footerter{
        display: flex;
    }
    .footer-menu{
        background-color: red;
        margin: 20px;
    }
    .footer-contato{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
        padding-top: 57px;
        margin-left: 65px;
    }
    .footer12{
        border-top: 1px solid #D4D4D4;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        img{
            height: 30px;
            margin-left: 8px;
        }
    }
`
export const Imagem = styled.img`
min-height: 100px;
height: 25vh;
margin: 40px 0 0 -35px;
`






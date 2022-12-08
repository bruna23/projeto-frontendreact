import styled from "styled-components"

export const Card = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 18px;
    height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px 8px 0 0;

        img{
            height: 180px;
            width: auto;
            max-width: 100%;
        }
    }
    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span{
            font-size: 14px;
            width: 90%;
            text-align: center;
        }
        h3{
            font-size: 20px;
            color: #3044c4;
        }
        button{
            background-color: #e94a49;
            border-radius: 8px;
            color: white;
            width: 200px;
            height: 40px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
        }
        button:hover{
            cursor: pointer;
            background-color: #b22120;
            font-weight: light;
            transform: scale(1.1)
        }
    }
    :hover{
        border:#7c88d6 2px solid;
  }
`
export const BoxCard = styled.div`
    display: flex;
    width: 850px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: white;
    flex-wrap: wrap;

    @media screen and (max-device-width: 877px){
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-wrap: wrap;
    height: 847px;
    } 

    @media screen and (max-device-width: 835px){
        height: 847px;
    }
    @media screen and (max-device-width: 514px){
        height: 847px;
      }
    @media screen and (max-device-width: 434px){
        height: 989px;
      }
    @media screen and (max-device-width: 398px){
        height: 1060px;
      }
    @media screen and (max-device-width: 382px){
        height: 1347px;
      } 
`

export const Container = styled.div`
    width: 1350px;
    display: flex;
    margin-bottom: 120px;
    justify-content: center;

    @media screen and (max-device-width: 793px){
      margin-top: 128px;
      }
`
export const BoxLateral = styled.div`
    width: 20%;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-right: 95px;
 
    h2{
        color: #3044c4;
    }

    input{
        border: 1px gray solid;
        border-radius: 4px;
        height: 20px;
        padding-left: 8px;
        background-color: white;
    }

    input:active{
        border: 1px #3044c4 solid; 
    }
`
export const BoxLateralCarrinho = styled.div`
    width: 20%;
    padding-left: 10px;
    width: 20%;
    font-size: 26px;
    margin-top: 50px;
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        color: #3044c4;
    }

    button{
        background-color: #ff8202;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 100%;
        height: 40px;
        border: none;
        transition: transform .3s;
    }

    button:hover{
        cursor: pointer;
        background-color:   #e3410b;
        transform: scale(1.1);
    }

    div:hover{
        cursor: pointer;
        color: #e94a49;
    }
  
    span{
        font-size: 12px;
        cursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAnQAAADgAAAA4AAAAJQAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXgAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAqwAAAEwAAAAzAAAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/AAAAUwAAADcAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVQAAADkAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOQAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAAA5AAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVQAAADkAAAAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAABVAAAAOwAAAB8AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAA/3p3dP96d3T/end0/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP8AAAD/AAAA/wAAAFUAAABCAAAAJgAAAAkAAAAAAAAAAAAAAAMAAAADAAAAAwAAAAEAAAD/AAAA/3p3dP96d3T/AAAA/wAAAP8AAAD/end0/3p3dP96d3T/AAAA/wAAAP96d3T/end0/3p3dP8AAAD/AAAA/wAAAP96d3T/end0/wAAAP8AAAD/AAAAVAAAAEoAAAAuAAAAEgAAAAAAAAAAAAAACQAAAAoAAAAMAAAABgAAAP8AAAD/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/AAAA/wAAAP8AAABQAAAATAAAADEAAAAXAAAAAAAAAAAAAAATAAAAFQAAAB8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAA/AAAAKAAAABIAAAAAAAAAAAAAABkAAAAjAAAANQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAACYAAAAXAAAACQAAAAAAAAD/AAAAGwAAAC4AAABHAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAADwAAAAgAAAADAAAAAAAAAP8AAAAZAAAA/wAAAP8AAAA/AAAAaAAAAKcAAACiAAAAoAAAAP8AAAD/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/wAAAP8AAAD/AAAAtQAAAKwAAACkAAAAbgAAAAUAAAAEAAAAAgAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAADEAAAAoAAAAFQAAAAoAAAABAAAA+wAAAP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/end0/3p3dP96d3T/AAAA/wAAAP8AAAAmAAAAEwAAAAUAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAAcAAAAGgAAABcAAAAOAAAABwAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAWAAAABEAAAAHAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAABwAAAAUAAAACAAAAAAAAAAAAAABfAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAI0AAAAHAAAABAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAP/wAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/gAAB/4AAAf+AAAH/AAAA/wAAAPcAAAD0wAAD8PgAH/H8AD/wfgA/8='), auto;
    }
`
export const BoxCentral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-right: 168px;
  
    .boxcentral-topo{
        display: flex;
        border-radius: 8px;
        align-items: center;
        justify-content: space-between;
        margin: 0 376px 20px 0px;
    }
`
export const carrinho2 = styled.div`
display: flex;
background-color: black;
`

import styled from "styled-components"

export const MainHeader = styled.div`
    height: 19vh;
    width: 1350px;
    display: flex;
    justify-content: space-between;
    color: #bedf0b;
    flex-direction: row;
    font-size: 35px;

    @media screen and (max-device-width: 1176px){
      height: 200px;
      gap: 29px;
    }
    h3{
        display: flex;
        margin: 50px;
        text-align: center;
    }
    div:first-child{
        display: flex;
        align-items: center;
        font-size: 25px;
    }
    div:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:last-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        gap: 40px;
    }
    img{
        height: 28px;
        transition: transform .3s;
    }
    img:hover{
        cursor: pointer;
        transform: scale(1.2);
        color: white;
    }
`
export const CartIcon = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Basic', sans-serif;
  font-family: 'Basic', sans-serif;
}
.wrapper{
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  background: #FFF;
  transition: all 0.6s ease-in-out;
}
#active:checked ~ .wrapper{
  right:0;
}
.menu-btn{
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 1px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.menu-btn span,
.menu-btn:before,
.menu-btn:after{
	content: "";
	position: absolute;
	top: calc(50% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #000;
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-btn:before{
  transform: translateY(-8px);
}
.menu-btn:after{
  transform: translateY(8px);
}
#active:checked + .menu-btn span {
	transform: scaleX(0);
}
#active:checked + .menu-btn:before {
	transform: rotate(45deg);
  border-color: #000;
}
#active:checked + .menu-btn:after {
	transform: rotate(-45deg);
  border-color: #000;
}
.wrapper ul{
  position: absolute;
  top: 60%;
  left: 50%;
  height: 90%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li{
  height: 10%;
  margin: 15px 0;
}
.wrapper ul li a{
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
  position: absolute;
  line-height: 50px;
  margin: 5px 30px;
  opacity: 0;
  transition: all 0.3s ease;
  transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.wrapper ul li a:after{
  position: absolute;
  content: "";
  background: #fff;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  transition: transform 0.3s ease;
}
.wrapper ul li a:hover:after{
  transform: scaleY(1);
}
.wrapper ul li a:hover{
  color: #1a73e8;
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}
.content .title{
  font-size: 40px;
  font-weight: 700;
}
.content p{
  font-size: 35px;
  font-weight: 600;
}
#active:checked ~ .wrapper ul li a{
  opacity: 1;
}
.wrapper ul li a{
  transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateX(100px);
}
#active:checked ~ .wrapper ul li a{
	transform: none;
	transition-timing-function: ease, cubic-bezier(.1,1.3,.3,1); 
   transition-delay: .6s;
  transform: translateX(-100px);
}
input[type="checkbox"]{
  display: none;
}
.maetodos{
    display: flex;
    flex-direction: column;
    height: 100%;
    color: black;

    h3{
        margin: 0;
    }
    footer .classeUm, .classeDois{
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
    }
    .classeDois{
        height: 40px;
        width: 350px;
        background-color: #202020;
        margin-bottom: 10px;
        margin-top: 20px;
        cursor: pointer;
        font-size: 14px;
    }
    main{
        height: 80vh;
    }
    header{
        margin-top: 20px;
        font-size: 16px;
        font-family: 'Basic', sans-serif;
    }
}
`
export const iconeCart = styled.div`
margin-right: 500px;
display: flex;
`
export const svgicone = styled.svg`
display: flex;
margin: 500px;
`






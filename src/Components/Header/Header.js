import { MainHeader, CartIcon, iconeCart } from "./styleHeader"
import { useNavigate } from "react-router-dom"

import '../../App.css'

function Header(props) {
  const navi = useNavigate()

  return (

    <MainHeader className="headermae">
      <div className="tituloprinci">
        <h3 className="tituloh3" onClick={() => { navi("/") }} style={{ cursor: "pointer" }}>Space Broo </h3>
      </div>
      <div>
        <iconeCart className="iconeCart" onClick={() => { navi("/carrin") }} style={{ cursor: "pointer", margin: "303px" }}>
          <svg width="38" height="38" fill="none" stroke="currentColor" color="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
            <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
            <path d="M2.25 3.75h3L7.5 16.5h12"></path>
            <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6" ></path>
          </svg>
        </iconeCart>
      </div>
    </MainHeader>
  )
}

export default Header
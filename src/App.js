import { createGlobalStyle } from "styled-components"
import { Container } from "./Components/styles"
import MainPage from './Components/MainPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Section from './Components/Section/Section'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrin from "./Components/carrin/Carrin";

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family:  'Basic', sans-serif;
}

li{
  list-style: none;
}`

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyled />
        <Header className="headermae" />
        <Section />
        <Container className="containermae">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Carrin" element={<Carrin />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

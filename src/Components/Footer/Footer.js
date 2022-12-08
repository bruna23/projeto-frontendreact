import { MainFooter, Imagem } from "./styleFooter"
import github from "../../assets/logo-github.svg"
import linkedin from "../../assets/logo-linkedin.svg"

function Footer() {
    return (
        <MainFooter>
            <div className="footer-dados">
                <div className="footer-contato">

                    <div><ul>
                        <li><h3> Minha conta</h3></li>
                        <br />
                        <li>Minha conta</li>
                        <li>Meus pedidos</li>
                        <li>Sobre nós</li>
                        <li>Mídias sociais</li>
                    </ul>
                    </div>
                    <div><ul>
                        <li><h3>Campanhas e Promoções</h3></li>
                        <br />
                        <li>Entrega e Frete</li>
                        <li>Pagamentos e Reembolso </li>
                        <li>Política de privacidade</li>
                        <li>Políticas da loja</li>
                    </ul>
                    </div>
                    <div >
                        <p><h3>Ajuda e Suporte</h3></p>
                        <br />
                        <p>Central do cliente</p>
                        <p>Fale conosco</p>
                        <p>Dúvidas frequentes</p>
                        <p>CUPONS ATIVOS</p>
                    </div>
                    <br />
                    <div><ul>
                        <li><h3>Institucional </h3></li>
                        <br />
                        <li>Quem somos</li>
                        <li>Imprensa</li>
                        <li>Política de privacidade</li>
                        <li>Política de privacidade</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="footer12">
                <p>Desenvolvido com ❤️ por Bruna Valério</p>
                <div>
                    <a href="https://github.com/bruna23" target={"_blank"}>
                        <img src={github} alt="icon-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/bruna-valerio/" target={"_blank"}>
                        <img src={linkedin} alt="icon-linkedin" />
                    </a>
                </div>
            </div>
            <div />
        </MainFooter>
    )
}

export default Footer

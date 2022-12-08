import { BoxCentral, Card, Imagem, BoxCard } from "./styles"
import { useState, useEffect } from 'react'
import Filtro from "./Filtro"
import Imagens from "../assets/fantasia2.jpg"
import Imagens1 from "../assets/fantasia3.jpg"
import Imagens0 from "../assets/fantasia0.jpg"
import Imagens3 from "../assets/fantasia4.jpg"
import Imagens8 from "../assets/fantasia8.jpg"
import Imagens5 from "../assets/fantasia6.webp"

function Home() {

  const produtos = [{
    id: 1,
    nome: "Fantasia Nasa Laranja com Capacete",
    preco: 399.99,
    imagem: Imagens,

  }, {
    id: 2,
    nome: "Fantasia Branca Lua com capacete",
    preco: 299.99,
    imagem: Imagens1,

  }, {
    id: 3,
    nome: "Fantasia Vênus com capacete",
    preco: 309.99,
    imagem: Imagens0,

  }, {
    id: 4,
    nome: "Fantasia Netuno ",
    preco: 259.99,
    imagem: Imagens3,

  }, {
    id: 5,
    nome: "Fantasia Urano ",
    preco: 229.99,
    imagem: Imagens8,

  }, {
    id: 6,
    nome: "Fantasia Nasa Branca com capacete",
    preco: 399.99,
    imagem: Imagens5,
  }]

  const [carrinho, setCarrinho] = useState([])
  const [pesquisa, setPesquisa] = useState("")
  const [valorMinimo, setValorMinimo] = useState("")
  const [valorMaximo, setValorMaximo] = useState("")
  const [ordem, setOrdem] = useState("")

  const onChangeCarrinho = (event) => {
    setCarrinho(event.target.value)
  }
  const onChangeOrdem = (event) => {
    setOrdem(event.target.value)
  }

  //FUNÇÃO PARA COMPRA DE PRODUTOS NO CARRINHO
  const compraProduto = (produto) => {
    const novoCarrinho = [...carrinho]
    const produtoAdicionado = produto

    const produtoExistente = novoCarrinho.find((produto) => {
      return produto.id === produtoAdicionado.id
    })
    if (produtoExistente) {
      produtoExistente.quantidade++
      produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
    } else {
      novoCarrinho.push({ ...produtoAdicionado, quantidade: 1, precototal: produtoAdicionado.preco })
    }
    setCarrinho(novoCarrinho)
  }

  useEffect(() => {
    if (carrinho.length > 0) {
      const listaStringCarrinho = JSON.stringify(carrinho)
      localStorage.setItem("carrinho", listaStringCarrinho)
    }
  }, [carrinho])

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
    if (novoCarrinho !== null) {
      setCarrinho(novoCarrinho)
    }
  }, [])

  const somaTela = (produtos) => {
    produtos
      .filter((produto) => { return produto.nome.includes(pesquisa) })
      .filter((produto) => { return produto.preco >= valorMinimo })
      .filter((produto) => { return valorMaximo ? produto.preco <= valorMaximo : produto })
      .map((produto, index) => {
        return produto.length
      })
  }

  return (
    <>
      <Filtro
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
      />
      <BoxCentral>
        <div className="boxcentral-topo">
          <h3>
            Resultado da busca:
          </h3>
          <p>
            {produtos.length} produtos
          </p>

          <div>
            <select value={ordem} onChange={onChangeOrdem} >
              <option value="">Ordenar por</option>
              <option value="Maior">Preço: do maior para o menor</option>
              <option value="Menor">Preço: do menor para o maior</option>
            </select>
          </div>
        </div>
        <BoxCard>

          {produtos
            //Busca de produto pelo nome
            .filter((produto) => { return produto.nome.includes(pesquisa) })
            //filtrar produtos a partir do menor valor
            .filter((produto) => { return produto.preco >= valorMinimo })
            //filtrar produtos a partir do menor valor
            .filter((produto) => { return valorMaximo ? produto.preco <= valorMaximo : produto })
            //Ordenar do maior e do menor
            .sort((a, b) => {
              switch (ordem) {
                case "Maior":
                  if (a.preco < b.preco) {
                    return 1
                  } else {
                    return -1
                  }
                case "Menor":
                  if (a.preco < b.preco) {
                    return -1
                  } else {
                    return 1
                  }
              }
            })
            // Comando para renderizar todos os produtos da loja
            .map((produto, index) => {
              return (
                <Card key={index}>
                  <div>
                    <img src={produto.imagem} alt="Produto-Loja" />
                  </div>
                  <div>
                    <span>{produto.nome}</span><br />

                    <h3>R$ {produto.preco}</h3><br />
                    <button onClick={() => compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>

                  </div>
                </Card>)
            })}
        </BoxCard>
      </BoxCentral>
    </>
  )
}

export default Home
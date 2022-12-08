import { useState, useEffect } from 'react'
import Carrinho from '../Carrinho.js'

function Carrin() {

  const [carrinho, setCarrinho] = useState([])
  const onChangeCarrinho = (event) => {
    setCarrinho(event.target.value)
  }
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

  return (
    <Carrinho
      cesta={carrinho}
      setCesta={setCarrinho}
    />
  )
}

export default Carrin;
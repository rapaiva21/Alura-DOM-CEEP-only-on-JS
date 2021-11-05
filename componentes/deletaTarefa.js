const BotaoDeleta = ()=> {
  const botaoDeleta = document.createElement('button')
  botaoDeleta.innerText = 'deletar'
  botaoDeleta.addEventListener("click" , deletarTarefa)
  return botaoDeleta
}

const deletarTarefa = (evento)=> {
  const botaoDeleta = evento.target
  const tarefaDeletada = botaoDeleta.parentElement
  tarefaDeletada.classList.remove()

  return botaoDeleta
})

export default BotaoDeleta

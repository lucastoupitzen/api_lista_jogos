var lista = []

class ListaJogos {

    adicionar(jogos) {
        const jogoCadastrado = jogos.jogo
        console.log(jogoCadastrado)
        if(lista.includes(jogoCadastrado)){
            return "O jogo já foi previamente cadastrado."
        }else{
            lista.push(jogoCadastrado)
            return "Jogo cadastrado com sucesso!"
        }
    }
}

module.exports = new ListaJogos
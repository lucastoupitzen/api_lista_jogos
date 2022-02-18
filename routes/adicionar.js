const ListaJogos = require("../methods/ListaJogos.js")

module.exports = app => {

    app.post("/adiconarjogo", async (req,res) => {
        const resultado = await ListaJogos.adicionar(req.body)
        console.log(req.body)
        res.send(resultado)
        
    })
}
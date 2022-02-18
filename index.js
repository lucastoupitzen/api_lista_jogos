const customExpress = require("./customExpress.js")

const app = customExpress()

app.listen(3000, () => console.log("Servidor operando na porta 3000"))
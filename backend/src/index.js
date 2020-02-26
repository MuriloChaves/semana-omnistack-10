// atribuindo uma constante express para facilitar o backend
const express = require('express')
// importanto mongo
const mongoose = require('mongoose')
// importando cors
const cors = require('cors')
// importando as rotas
const routes = require('./routes')

// criando uma constante de app apontando para a função express
const app = express()

mongoose.connect(
    'mongodb+srv://murilochaves:123sqweeasdr123MURILOCH@cluster0-9lftr.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// cors para liberar o acesso pra todo tipo de aplicação
app.use(cors())
// entender requisições no formato json - TEM Q VIR ANTES
app.use(express.json())
// atribuindo as rotas
app.use(routes)

// atribuindo o localhost na porta 3333
app.listen(3333)

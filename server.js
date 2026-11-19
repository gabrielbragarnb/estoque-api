import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import loggerMiddleware from './src/middleware/logger.js';

const app = express();
const port = 3000;

// Middleware para formatar o body JSON
app.use(json());

// Middleware para formatar dados de formulário
app.use(urlencoded({ extended: true }));

// Aplicação dos middlewares
app.use(loggerMiddleware);
app.use(valorProdutoMiddleware);

// Rota principal
app.get('/', (req, res) => {
    res.status(200).json({
        "status": "ok",
        "codigo": 200,
        "mensagem": "API de estoque funcionando!(Bem vindo!)"
    });
});

// Criar produto
app.post('/produtos', (req, res) => {
    let produto = req.body;
    res.status(201).json({
        "status": "criado",
        "codigo": 201,
        "mensagem": `O produto ${produto.nome} foi criado! Valor ${produto.preco}`
    });
});

// Alterar produto
app.put('/produtos/:id', (req, res) => {
    let id = req.params.id;
    let produto = req.body;

    res.status(200).json({
        "status": "alterado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi alterado! Nome ${produto.nome}, valor ${produto.preco}`
    });
});

// Deletar produto
app.delete('/produtos/:id', (req, res) => {
    let id = req.params.id;

    res.status(200).json({
        "status": "deletado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi deletado!`
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

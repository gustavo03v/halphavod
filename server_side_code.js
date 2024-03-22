const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Substitua 'api_url' pela URL base da API da QPanel
const api_url = 'https://api.qpanel.com.br';

app.get('/canais', async (req, res) => {
    try {
        const response = await axios.get(`${api_url}/canais`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Erro ao buscar canais');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

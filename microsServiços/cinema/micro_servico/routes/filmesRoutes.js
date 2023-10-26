const express = require('express');
const routes = express.Router();
const filmes = require('../data/cinemaDb');
//listar
routes.get("/filmes", async (req, res) => {
    try{
        res.status(200).json(filmes)
    } catch (error) {
        console.error("Erro durante a busca da lista de filmes:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
})

routes.get("/filmes/:id", async (req, res) => { 
    try {
        const idFilme = Number(req.params.id);
        const filme = filmes.find((filme) => filme.id === idFilme);

        if (!filme) {
            return res.status(404).json({ error: "Filme não encontrado" });
        }

        res.json(filme);
    } catch (error) {
        console.error(`id não encontrado`, error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

module.exports = routes;
import express from 'express'
import conectNaDB from './db.js';
import cors from 'cors';
import artista from './models/Artista.js';



const app = express();

app.use(cors());
const conexao = await conectNaDB();

conexao.on('error', (erro) =>{
   console.error("Erro ao conectar no MongoDB", erro)
})

conexao.once('open', ()=>{
    console.log('conectado no MongoDB')
})

app.get("/artistas",async(req,res) => {
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas)
})

app.get('/artista/:id', async(req,res) =>{
    const artista = await artista.findById(req.params.id);
    res.status(200).json(artista);
})

// app.get('/search/:nome', async(req,res) =>{
//     const nome = req.params;
//     const artista = await artista.find({nome: new RegExp(nome, )});
//     res.status(200).json(artista);
// })


app.listen(3000, ()=>{
    console.log("servidor conectado")
})


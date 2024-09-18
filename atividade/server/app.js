import express from 'express'
import conectNaDB from './db.js';
import cors from 'cors';



const app = express();

app.use(cors());
const conexao = await conectNaDB();

conexao.on('error', (erro) =>{
    console.error("Erro ao conectar no MongoDB", erro)
})

conectNaDB.once('open', ()=>{
    console.log('conectado no MongoDB')
})

app.listen(3000, ()=>{
    console.log("servidor conectado")
})

r
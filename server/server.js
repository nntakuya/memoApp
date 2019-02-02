import express from 'express'

const app = express()

//GETリクエストでルートにアクセスがあった時の動作
app.get('/',(req,res)=>{
    res.send('Hello');
});

//3000番ポートを使って

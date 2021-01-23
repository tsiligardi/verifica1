const express= require("express")
const app= new express()
const fetch=require("node-fetch")
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.get("/accreditamento",(req,res)=>{
    res.send({
        "nome": "tommaso",
        "cognome": "siligardi"
    })
})

app.post('/somma-pari', (req, res) => {
    numbers=req.body.numbers
    const pari=numbers.filter((e,i,arr)=>{
        if(e%2===0){return e}
    })
    const sum=pari.reduce((acc,e)=>{
        return acc+=e
    },0)
    console.log
    res.send({
        "sum":sum
    })
})




app.put("/lista-parole-a",(req,res)=>{
    console.log(req.body)
    const words=req.body.words
    const quattro=words.filter((e,i,arr)=>{
        if(e.length>4){
            return e
        }
    })
    console.log(quattro)
    const lista = quattro.join(" ")


    res.send({
        count: quattro.length,
        words: lista
    })
})




app.listen(8080,()=>console.log('server listening on port 8080'))
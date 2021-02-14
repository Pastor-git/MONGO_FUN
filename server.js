const express = require("express");
const bodyParser = require("body-parser");

const mongoClient = require("mongodb").MongoClient;

const app = express();
const port = 4000;


app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json())
const uri = `mongodb+srv://halibel4:Pocahontas1@cluster0.s0p9k.mongodb.net/mojabaza?retryWrites=true&w=majority`;
mongoClient.connect(uri, {useUnifiedTopology: true})
.then( client => {
    console.log("Połączono z bazą danych");
    const db = client.db("nowabazadanych");
    const nazwakolekcji = db.collection('nazwakolekcji')

    app.get("/", function(req,res){
        res.sendFile(__dirname+ "/index.html")
    });
    
    app.post("/someuserdata", function (req,res){
        console.log("Wysłano formularz")
        console.log(req.body)
        nazwakolekcji.insertOne(req.body)
            .then(result => console.log(result))
            .catch(error => console.error(error))
    })
    

    app.listen(port, (err) => {
        if (err) { return console.log(`Błąd: ${err}`)}
        console.log(`Serwer działa na porcie ${port}`)
    });
})
    .catch (err => console.error(error))

app.get("/mandalorian", function(req,res) {
    res.send("Yoda show")
})

app.get("/blog/full-stack", function(req,res) {
     res.send("homwfullstack")
})


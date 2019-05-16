let express = require('express');
let fs = require("fs");
let PORT = 19999

let app = express();
app.use(express.static("./public"))
if(!fs.existsSync("./saved_data")){
    fs.mkdirSync("./saved_data");
}

app.get("/", async(req, res)=> {
    fs.readFile("./index.html",(err,data)=>{
        res.end(data)
      });    
});

app.listen(PORT);
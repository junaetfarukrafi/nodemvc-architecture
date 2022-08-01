const express = require("express");
const { send } = require("process");
const useRouter = require("./routes/user.route");
const productRouter = require("./routes/products.route")
const app = express();
const PORT =3000;

app.use(express.urlencoded({extended:true}));
app.use(useRouter);
app.use(productRouter);

app.use((req,res,next)=>{
    res.status(404).send("this page is not exist")
    next();
});

app.listen(PORT,(req,res)=>{
    console.log(`server is running succefully at http://localhost:${PORT}`)
});
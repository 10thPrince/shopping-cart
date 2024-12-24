import express, { json } from "express";
import { PORT  } from "./config.js";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";
import cors from "cors"


const app = express();

//app.use(cors());

app.use(
    cors({
        origin: `http://localhost:${PORT}`,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
)

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use('/api/products', productRouter)

app.listen(PORT, ()=>{
    connectDB();
    console.log(`App started on port ${PORT}`);    
})



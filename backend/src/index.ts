import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
    console.log('Database Connected!')
}).catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/test", async(req: Request, res: Response) => {
    res.json({ message: "Hello from express endpoint!" });
});

app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
})
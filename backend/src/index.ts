import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
    console.log('Database Connected!')
}).catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//Routes
app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
})
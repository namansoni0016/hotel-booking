import express, {Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
    console.log('Database Connected!')
}).catch((err) => {
    console.log(err);
})
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
})
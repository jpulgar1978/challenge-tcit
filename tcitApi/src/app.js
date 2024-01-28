import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import postRoutes from "./routes/posts.routes.js";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/post", postRoutes);

export default app;

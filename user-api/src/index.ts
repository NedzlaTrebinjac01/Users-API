import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users";
import exp from "constants";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
const PORT = 3000;

//Middleware
app.use(bodyParser.json());

//Routes
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
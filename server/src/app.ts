import express, { Application } from "express";
import cors from "cors";
import * as http from "http";
import "dotenv/config";

import studentRoute from "./routes/student";
import gradeRoute from "./routes/grade";
import courseRoute from "./routes/course";

const app: Application = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

server.listen(process.env.PORT ?? "", () => {
    console.log(`server is running on port ${process.env.PORT}`);
});

app.use("/api/students", studentRoute);
app.use("/api/grades", gradeRoute);
app.use("/api/courses", courseRoute);
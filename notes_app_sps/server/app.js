import express from 'express';
import cors from 'cors';
import notesRoute from './routes/notes_route.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",notesRoute)

export default app;

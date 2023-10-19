import { Router } from "express";
import { createNote, getNote } from "../controllers/notes_controller.js";

const router = Router();


router.get('/notes',getNote);
router.post('/notes',createNote);

export default router;
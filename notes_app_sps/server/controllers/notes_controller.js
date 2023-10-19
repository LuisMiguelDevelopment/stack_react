import Notes from '../models/Notas_model.js'

export const getNote = async (req, res)=>{
    try {
        const notes = await Notes.find();
        res.json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).json("Error get notes")
    }
}


export const createNote = async (req, res)=>{
    
    try {
        const {title , info , name , date } = req.body;

        const newNote = new Notes({
            title,
            name,
            info,
            date
        });
        const saveNote = await newNote.save();
        res.status(200).json(saveNote);  
    } catch (error) {
        console.log(error);
        res.status(500).json("Error create note")
    }
    
    
}
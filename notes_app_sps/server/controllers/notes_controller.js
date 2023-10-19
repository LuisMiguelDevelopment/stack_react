import Notes from '../models/Notas_model.js'

export const getNote = async (req, res)=>{
    try {
        const notes = await Notes.find();
        return res.json(notes);
        
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


export const updateNote = async (req, res)=>{
    try {
        const note = await Notes.findByIdAndUpdate(req.params.id , req.body,{
            new:true
        });
        if(!note)return res.status(404).json({message:"Note not found"});
        res.status(200).json("update note")  
    } catch (error) {
        console.log(error);
        res.status(500).json("Error update note");
    }
}


export const deleteNote = async (req, res)=>{
    try {
        const note = await Notes.findByIdAndDelete(req.params.id);
        if(!note)return res.status(404).json({message:"Note not found"});
        res.status(200).json("delete note")
    } catch (error) {
        console.log(error)
        res.status(500).json("Error delete note")
    }
}
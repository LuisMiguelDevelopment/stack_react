import { createContext, useContext, useState } from 'react';
import { getNotesRequest } from '../api/note';

const NoteContext = createContext();

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error('useNotes must be used within a ProductoProvider');
    }
    return context;
};

export function NoteProvier({ children }) {
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {
            const res = await getNotesRequest();
            setNotes(res.data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <NoteContext.Provider value={{
            notes,
            getNotes
        }}>
            {children}
        </NoteContext.Provider>
    )

}
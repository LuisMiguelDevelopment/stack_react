import { useEffect } from "react";
import { useNotes } from "../../context/noteContext";

export const Notes = () => {

  const {getNotes , notes} = useNotes();

  useEffect(()=>{
    getNotes();
  },[])

  return (
    <div>
      {
        notes.map(note=>(
          <div key={note.name}>
            <h1>{note.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

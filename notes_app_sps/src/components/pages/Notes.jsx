import React, { useEffect } from "react";
import { useNotes } from "../../context/noteContext";
import "../../assets/css/notes.css";

export const Notes = () => {
    const { getNotes, notes } = useNotes();

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className="general__card">
            {notes.map((note) => (
                <div className="card" key={note._id}>
                    <div className="card__header">
                        <h2 className="card__h2">{note.title}</h2>
                        <button className="card__button card__button-edit">Edit</button>
                    </div>
                    <div className="card__body">
                        <span className="card__span">{note.info}</span>
                        <span className="card__span">{note.name}</span>
                        <span className="card__span">{note.timeElapsed}</span>
                    </div>
                    <div className="card__footer">
                      <button className="card__button card__button-delete">Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
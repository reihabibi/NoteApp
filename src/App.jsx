import { useEffect, useState } from "react";

import uuid from "react-uuid";

import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
    setActiveNote(false);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  const [isNotesOpen, setIsNotesOpen] = useState(true);

  return (
    <div className="flex w-screen h-screen max-h-screen overflow-hidden">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        setActiveNote={setActiveNote}
        isNotesOpen={isNotesOpen}
        setIsNotesOpen={setIsNotesOpen}
      />
      <div
        className={
          "h-full pb-40 overflow-hidden " +
          (isNotesOpen ? "w-0 md:w-4/6 lg:w-4/5 " : "w-full")
        }
      >
        <Navbar
          activeNote={getActiveNote()}
          onDeleteNote={onDeleteNote}
          isNotesOpen={isNotesOpen}
          setIsNotesOpen={setIsNotesOpen}
        />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </div>
  );
}

export default App;
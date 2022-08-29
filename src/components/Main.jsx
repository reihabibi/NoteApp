import ReactMarkdown from "react-markdown";
import React, { useState } from "react";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const [edit, setEdit] = useState(true);

  if (!activeNote)
    return (
      <div className="w-full h-full flex justify-center pt-40">
        <h1 className="text-xl tracking-wide">No Note active</h1>
      </div>
    );

  return (
    <div className="w-full h-full">
      <div
        className={
          "w-full h-full px-4 md:px-10 lg:px-32 my-8 overflow-hidden " +
          (!edit ? "toggle--edit" : "")
        }
      >
        <input
          className="w-full mb-2 md:mb-4 text-xl font-medium border-0 focus:outline-none focus:ring-0"
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          className="overflow-scroll w-full h-full border-0 focus:outline-none focus:ring-0"
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div
        className={
          "w-full h-full my-8 px-4  md:px-10 lg:px-20 overflow-auto " +
          (edit ? "toggle--edit" : "")
        }
      >
        <h1 className="w-full mb-2 md:mb-4 text-xl font-medium ">
          {activeNote.title}
        </h1>
        <ReactMarkdown className="markdown-preview ">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;

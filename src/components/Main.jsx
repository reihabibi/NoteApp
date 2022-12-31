import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMediaQuery } from "react-responsive";

const Main = ({ activeNote, onUpdateNote, edit }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const isMobile = useMediaQuery({ query: `(max-width: 1280px)` });

  const [markdownValue, setmarkdownValue] = useState(false);

  if (!activeNote)
    return (
      <div className="w-full h-full flex justify-center pt-40">
        <h1 className="text-xl tracking-wide">No Note active</h1>
      </div>
    );

  return (
    <div className="flex w-full h-full mt-2 md:mt-20 px-4 md:px-10 lg:px-24 ">
      <div
        className={
          "h-full px-2 xl:mx-8 overflow-hidden " +
          (isMobile
            ? edit
              ? " w-full "
              : "hidden "
            : edit
            ? " w-1/2 border-r "
            : " hidden ")
        }
      >
        <input
          className="w-full py-5 mb-4 text-3xl font-bold text-gray-600 border-0 focus:outline-none focus:ring-0"
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
          "h-full px-2 xl:mx-8 " +
          (isMobile
            ? edit
              ? " hidden  "
              : " w-full  "
            : edit
            ? " w-1/2 "
            : " w-full ")
        }
      >
        <h1 className="w-full py-5 mb-4 text-3xl font-bold text-gray-600">
          {edit ? activeNote.title : activeNote.title}
        </h1>
        <div className="h-full w-full pb-14 overflow-auto">
          <ReactMarkdown
            className="w-full prose pb-14"
            remarkPlugins={[remarkGfm]}
          >
            {activeNote.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Main;

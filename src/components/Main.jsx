import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Main = ({ activeNote, onUpdateNote, edit }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

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
          "w-full h-full mt-2 md:mt-8 px-2 md:px-4 md:px-10 lg:px-36 overflow-hidden " +
          (!edit ? "toggle--edit" : "")
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
          "w-full h-full mt-2 md:mt-8 px-2 md:px-10 lg:px-36 overflow-auto " +
          (edit ? "toggle--edit" : "")
        }
      >
        <h1 className="w-full py-5 mb-4 text-3xl font-bold text-gray-600">
          {activeNote.title}
        </h1>
        <ReactMarkdown className="w-full prose" remarkPlugins={[remarkGfm]}>
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;

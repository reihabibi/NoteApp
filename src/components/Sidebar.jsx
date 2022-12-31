import { BsPencilSquare } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({
  notes,
  onAddNote,
  setActiveNote,
  isNotesOpen,
  setIsNotesOpen,
  setEdit,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  return (
    <div
      className={
        "float md:block md:w-2/6 lg:w-3/12 h-full z-10 border-r overflow-y-scroll ease-in-out duration-700 bg-white " +
        (isNotesOpen
          ? " translate-x-0 w-full "
          : " -translate-x-full absolute ")
      }
    >
      <div className="sticky top-0 py-5 px-4 md:px-2 lg:px-4 bg-white">
        <div className="flex justify-between items-center mt-2 mb-5">
          <h1 class="text-xl font-bold">My Notes</h1>
          <button
            className="w-5 h-5 text-black hover:text-blue-700"
            onClick={() => {
              onAddNote();
              setEdit(true);
              isMobile ? setIsNotesOpen(false) : setIsNotesOpen(true);
            }}
          >          
              <BsPencilSquare className="w-full h-full" />
          </button>
        </div>

        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            class="w-full py-2 pl-10 pr-4 text-black bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-0"
            placeholder="Search notes..."
          />
        </div>
      </div>

      <div className="border-t">
        {sortedNotes.map(({ id, title, body }, i) => (
          <div
            className="py-2 px-6 lg:px-8 pt-4 border-b hover:bg-gray-100 "
            onClick={() => {
              setActiveNote(id);
              isMobile ? setIsNotesOpen(false) : setIsNotesOpen(true);
            }}
          >
            <h1 className="text-gray-700 truncate font-bold">
              {title}
            </h1>
            <p className="mt-1 text-sm truncate font-normal tracking-wide leading-relaxed max-w-sm text-gray-500 pr-2">
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

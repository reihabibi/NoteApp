import { GoDiffAdded } from "react-icons/go";

const Sidebar = ({
  notes,
  onAddNote,
  setActiveNote,
  isNotesOpen,
  setIsNotesOpen,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div
      className={
        " md:w-2/6 lg:w-1/5 h-full z-10 border-r overflow-y-scroll ease-in-out duration-700 bg-white " +
        (isNotesOpen
          ? " translate-x-0 w-full "
          : " -translate-x-full absolute ")
      }
    >
      <div className="sticky top-0 py-5 px-2 md:px-2 lg:px-4 bg-white">
        <div className="flex justify-between items-center mt-2 mb-5">
          <h1 class="text-xl font-medium text-gray-900">My Notes</h1>
          <button
            className="text-2xl text-gray-600 "
            onClick={() => {
              onAddNote();
              setIsNotesOpen(false);
            }}
          >
            <GoDiffAdded />
          </button>
        </div>

        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
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
            class="w-full py-3 pl-10 pr-4 text-black bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-0"
            placeholder="Search notes..."
          />
        </div>
      </div>

      <div>
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className="py-4 px-4 md:px-6 lg:px-8 pt-8 border-b hover:bg-gray-100"
            onClick={() => {
              setActiveNote(id);
              setIsNotesOpen(false);
            }}
          >
            <div className="flex justify-between  ">
              <h1 className="text-lg text-gray-700 truncate">{title}</h1>
            </div>

            <p className="text-sm truncate font-normal tracking-wide leading-relaxed max-w-sm text-gray-500 pr-2">
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
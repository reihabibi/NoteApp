import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { GoNote } from "react-icons/go";
import { GoThreeBars } from "react-icons/go";

const Navbar = ({
  activeNote,
  onDeleteNote,
  isNotesOpen,
  setIsNotesOpen,
  edit,
  setEdit,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  if (!isMobile)
    return (
      <div className="w-full">
        <div className="flex justify-between items-center w-full px-4 md:px-14 pt-5">
          <button
            className="text-3xl text-gray-600 font-bold"
            onClick={() => setIsNotesOpen(!isNotesOpen)}
          >
            <GoNote />
          </button>

          <div className="flex gap-6">
            <div
              class="inline-flex rounded-2xl bg-gray-100 p-1 gap-2"
              role="group"
            >
              <button
                type="button"
                onClick={() => setEdit(true)}
                class={
                  "py-2 px-4 text-xs md:text-sm font-medium text-gray-700  rounded-2xl " +
                  (edit ? "bg-white shadow-md text-blue-700" : "")
                }
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setEdit(false)}
                class={
                  "py-2 px-4 text-xs md:text-sm font-medium text-gray-700  rounded-2xl " +
                  (!edit ? "bg-white shadow-md text-blue-700" : "")
                }
              >
                Preview
              </button>

              <button
                className=" py-2 px-8 text-xs md:text-sm font-medium text-gray-400 border-l-2 hover:text-red-500 "
                onClick={(e) =>
                  onDeleteNote(activeNote.id) + setIsNotesOpen(true)
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  if (isMobile)
    return (
      <>
        <div
          className={
            "bg-gray-100 absolute bottom-0 w-full pt-14 pb-16 rounded-t-3xl ease-in-out duration-500 " +
            (!isOpenMenu ? "translate-y-full scale-y-0 " : "  translate-y-0 ")
          }
        >
          <div className="border-y">
            <button
              type="button"
              class="w-1/2 border-r text-gray-900 focus:outline-none text-md py-2"
            >
              Dark
            </button>
            <button
              type="button"
              class="w-1/2 text-gray-900 focus:outline-none text-md py-2"
            >
              Light
            </button>
          </div>
          <button className="w-full py-4 border-b ">Info</button>
          <button
            className="w-full py-4 border-b  "
            onClick={() => setIsOpenMenu(true)}
          >
            Future Updates
          </button>
          <button
            className="w-full py-4 text-red-500 "
            onClick={(e) =>
              onDeleteNote(activeNote.id) +
              setIsNotesOpen(true) +
              setIsOpenMenu(false)
            }
          >
            Delete
          </button>
        </div>
        <div className="absolute bottom-0 w-full h-14 px-4 flex justify-between items-center bg-gray-100 border-t ">
          <div className="flex justify-between items-center">
            <button
              className="text-2xl text-gray-500"
              onClick={() => setIsNotesOpen(!isNotesOpen)}
            >
              <GoNote />
            </button>
          </div>
          <div
            class="inline-flex rounded-2xl bg-gray-100 p-1 gap-2"
            role="group"
          >
            <button
              type="button"
              onClick={() => setEdit(true)}
              class={
                "py-2 px-4 text-sm  font-medium text-gray-700  rounded-2xl " +
                (edit ? "bg-white shadow-md text-blue-700" : "")
              }
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => setEdit(false)}
              class={
                "py-2 px-4 text-sm  font-medium text-gray-700  rounded-2xl " +
                (!edit ? "bg-white shadow-md text-blue-700" : "")
              }
            >
              Preview
            </button>
            <button
              className="ml-3 text-2xl text-gray-500"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <GoThreeBars />
            </button>
          </div>
        </div>
      </>
    );
};

export default Navbar;

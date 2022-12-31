import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { GoNote } from "react-icons/go";
import { BiMenu } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Navbar = ({
  activeNote,
  onDeleteNote,
  isNotesOpen,
  setIsNotesOpen,
  edit,
  setEdit,
}) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  if (!isMobile)
    return (
      <div
        className={
          "fixed py-1 top-0 bg-white " +
          (isNotesOpen ? "w-0 md:w-4/6 lg:w-4/5 " : "w-full")
        }
      >
        <div className="flex justify-between items-center w-full px-4 md:px-10 py-7">
          <button
            className="w-6 h-6 text-black hover:text-blue-700"
            onClick={() => setIsNotesOpen(!isNotesOpen)}
          >
            <GoNote className="w-full h-full"/>
          </button>

          <div className="fixed right-6 flex gap-6 items-center">
            <div
              class="inline-flex rounded-2xl bg-gray-100 p-1 gap-2"
            >
              <button
                type="button"
                onClick={() => setEdit(true)}
                class={
                  "py-1 px-4 text-xs md:text-sm font-medium text-gray-700  rounded-2xl hover:bg-white ease-in-out duration-300 " +
                  (edit ? "bg-white shadow-md text-blue-700" : "")
                }
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setEdit(false)}
                class={
                  "py-1 px-4 text-xs md:text-sm font-medium text-gray-700  rounded-2xl hover:bg-white ease-in-out duration-300 " +
                  (!edit ? "bg-white shadow-md text-blue-700" : "")
                }
              >
                Preview
              </button>

              <button
                className=" py-1 px-8 text-xs md:text-sm font-medium text-gray-400 border-l-2 hover:text-red-500 "
                onClick={(e) =>
                  onDeleteNote(activeNote.id) + setIsNotesOpen(true)
                }
              >
                Delete
              </button>
            </div>
            <button
              className="w-6 h-6 text-black hover:text-blue-700"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <BiMenu className="w-full h-full"/>
            </button>
          </div>
        </div>
        <div
          className={
            "fixed right-7 py-6 w-60 border bg-white rounded-lg shadow-md ease-in-out duration-300 " +
            (isOpenMenu ? "" : "hidden ")
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
              class="w-1/2 text-gray-900 bg-gray-100 focus:outline-none text-md py-2"
            >
              Light
            </button>
          </div>
          <div className="flex items-center p-4 border-b hover:bg-gray-100 ease-in-out duration-300 ">
            <AiOutlineInfoCircle className="text-xl mr-5" />
            <a href="https://devhints.io/markdown" target="_blank">
              Markdown Cheatsheet
            </a>
          </div>
          <div className="flex items-center py-4 px-4 border-b hover:bg-gray-100 ease-in-out duration-300 ">
            <AiOutlineInfoCircle className="text-xl mr-5" />
            <a href="https://github.com/reihabibi/NoteApp" target="_blank">
              Source Code
            </a>
          </div>
        </div>
      </div>
    );

  if (isMobile)
    return (
      <>
        <div
          className={
            "bg-gray-100 absolute bottom-0 w-full pt-14 pb-16 rounded-t-3xl ease-in-out duration-300 " +
            (!isOpenMenuMobile
              ? "translate-y-full scale-y-0 "
              : "  translate-y-0 ")
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
          <div className="w-full py-4 border-b text-center ">
            <a href="https://devhints.io/markdown" target="_blank">
              Markdown Cheatsheet
            </a>
          </div>
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
              className="w-6 h-6 text-black "
              onClick={() => setIsNotesOpen(!isNotesOpen)}
            >
              <GoNote className="w-full h-full" />
            </button>
          </div>
          <div class="inline-flex rounded-2xl p-1 gap-2 items-center">
            <button
              type="button"
              onClick={() => setEdit(true)}
              class={
                "py-2 px-6 text-sm  font-medium text-gray-700  rounded-2xl  ease-in-out duration-300  " +
                (edit ? "bg-white shadow-md text-blue-700" : "")
              }
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => setEdit(false)}
              class={
                "py-2 px-6 text-sm  font-medium text-gray-700  rounded-2xl  ease-in-out duration-300  " +
                (!edit ? "bg-white shadow-md text-blue-700" : "")
              }
            >
              Preview
            </button>
            <button
              className="ml-3 w-6 h-6 text-black"
              onClick={() => setIsOpenMenuMobile(!isOpenMenuMobile)}
            >
              <BiMenu className="w-full h-full" />
            </button>
          </div>
        </div>
      </>
    );
};

export default Navbar;

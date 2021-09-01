import React, { useState, useEffect, createRef} from 'react';
import Poem from '../poem.js';
import { createPopper } from "@popperjs/core";
import { ChevronDownIcon } from '@heroicons/react/solid'

const listStyle = {
    listStyleType: 'none',
    paddingBottom: '20px'
}

const Dropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
      <div className="flex flex-wrap justify-end mb-5 relative top-0 right-0">
        <div className="w-full sm:w-1/2 md:w-1/3 px-1">
          <div className="relative inline-flex align-middle w-full">
            <button className={"text-gray-900 text-sm px-4 py-1 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-gray-100"} type="button" ref={btnDropdownRef} value="asd" onClick={() => { dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover(); }}>
              <div className="content flex py-2">Sort <ChevronDownIcon className="h-5 ml-3 text-gray-400"/></div>
            </button>
            <div ref={popoverDropdownRef} className={ (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"} style={{ minWidth: "12rem" }}>
              <button className={"text-left text-sm py-2 px-4 font-normal focus:outline-none hover:bg-gray-200 block w-full whitespace-nowrap bg-transparent text-blueGray-700"} onClick={e => e.preventDefault()}>
                  Newest
                </button>
              <button className={"text-left text-sm py-2 px-4 font-normal focus:outline-none hover:bg-gray-200 block w-full whitespace-nowrap bg-transparent text-blueGray-700"} onClick={e => e.preventDefault()}>
                Oldest
              </button>
              <button className={"text-left text-sm py-2 px-4 font-normal focus:outline-none hover:bg-gray-200 block w-full whitespace-nowrap bg-transparent text-blueGray-700"} onClick={e => e.preventDefault()}>
                Upvotes descending
              </button>
              <button className={"text-left text-sm py-2 px-4 font-normal focus:outline-none hover:bg-gray-200 block w-full whitespace-nowrap bg-transparent text-blueGray-700"} onClick={e => e.preventDefault()}>
                Upvotes ascending
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};


const Home = ({poems}) => {

    return (
      <div >
        <Dropdown/>
        <ul>
          {poems.map((poem) => (<li key={poem} style={listStyle}><Poem poem={poem}/></li>))}
        </ul>  
      </div>  
    )
  }

  export default Home;
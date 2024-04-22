import React, { useState } from "react";



function ImageSearch({searchText}) {
    const onSubmit = (e) =>{
        e.preventDefault()
        searchText(text)
        }
        
  const [text, setText] = useState("");
  return (

<form className="py-6 px-10" onSubmit={onSubmit}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input    onChange={(e) => setText(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Images..." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>


  );
}

export default ImageSearch;
    {/* <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} action="" className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-blur-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            placeholder="Search Image Term ..."
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2"
          />
          <button type="submit" className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700">
            Search
          </button>
        </div>
      </form>
    </div> */}
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import poemServices from './services/poems.js';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'

const Poem = ({poem}) => {
    const id = poem.id
    const [poems, setPoems] = useState(poem.votes)

    const upvoteHandler = (event) => {

        poemServices.upvote(id)
        .then(object => {
            setPoems(object.votes)
        })
    }

    return (
        <div className="mx-auto bg-gray-100 shadow-md rounded border-grey w-1/2">
            <div className="p-4 flex flex-wrap">
                <div className="float left flex items-center justify-center">
                    <button onClick={upvoteHandler} className="transition duration-300 ease-in-out focus:outline-none border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-normal py-2 px-4 rounded justify-center"><ChevronDoubleUpIcon className="h-8 text-blue-500"/><p className="">{poems}</p></button>
                </div>
                
                <div className="float-right flex items-center justify-center px-4">
                    <Link to={`/poems/${poem.id}`}>
                        <b>{poem.title}</b> by <i>{poem.author}</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Poem
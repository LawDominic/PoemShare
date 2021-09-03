import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import poemServices from './services/poems.js';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import ReactMarkdown from 'react-markdown'

const Poem = ({poem}) => {
    const id = poem.id
    const [poems, setPoems] = useState(poem.votes)

    const upvoteHandler = (event) => {
        poemServices.upvote(id)
        .then(object => {
            setPoems(object.votes)
        })
    }

    const str = poem.text
    const splitted = str.split(/\n\n/)
    const text =  splitted[0] + splitted[1]

    return (
        <div className="mx-auto bg-gray-100 shadow-md rounded border-grey w-1/2">
            <div className="p-4 flex flex-wrap">
                <div className="float left flex items-center justify-center">
                    <button onClick={upvoteHandler} className="transition duration-300 ease-in-out focus:outline-none border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-normal py-2 px-4 rounded justify-center"><ChevronDoubleUpIcon className="h-8 text-blue-500"/><p className="">{poems}</p></button>
                </div>
                <div className="float-right flex items-center justify-center px-4">
                    <Link to={`/poems/${poem.id}`}>
                        <div className="text-center items-center">
                           <b>{poem.title}</b> by <i>{poem.author}</i>
                            <ReactMarkdown children={text} className="text-sm mt-2"/> 
                        </div>
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Poem
import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import style from './markdownCSS.module.css';
import poemServices from '../services/poems.js';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'

const Poem = ({poems}) => {
    const id = Number(useParams().id)

    const poem = poems.find(p => p.id === id)
    const [poemVote, setPoemVote] = useState(poem.votes)
    
    const upvoteHandler = (event) => {
        poemServices.upvote(id)
        .then(object => {
            setPoemVote(object.votes)
        })
    }
    return (
        <div>
            <div className="float-left flex items-center justify-center mt-10">
                <button onClick={upvoteHandler} className="transition duration-300 ease-in-out focus:outline-none border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-normal py-2 px-4 rounded justify-center">
                    <ChevronDoubleUpIcon className="h-8 text-blue-500"/>
                        <p className="">
                            {poemVote}
                        </p>
                </button>
            </div>
        <div className="space-y-4 text-gray-900 w-2/3 mx-auto">
            <div className="text-center">
                <p className="text-2xl font-semibold">{poem.title}</p>
                <p>by <i>{poem.author}</i></p><br/>
                <ReactMarkdown children={poem.text} className={style.reactMarkDown}/>
            </div>
            
        </div></div>
    )
}

export default Poem
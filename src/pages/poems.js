import React from 'react';
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import style from './markdownCSS.module.css';

const Poem = ({poems}) => {
    const id = Number(useParams().id)
    const poem = poems.find(p => p.id === id)

    return (
        <div className="space-y-4 text-gray-900 w-2/3 mx-auto">
            <p className="text-2xl font-semibold">{poem.title}</p>
            <p>by <i>{poem.author}</i></p><br/>
            <ReactMarkdown children={poem.text} className={style.reactMarkDown}/>
        </div>
    )
}

export default Poem
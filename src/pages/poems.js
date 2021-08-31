import React from 'react';
import {useParams} from 'react-router-dom'

const Poem = ({poems}) => {
    const id = Number(useParams().id)
    const poem = poems.find(p => p.id === id) 

    return (
        <div>
            <h1>{poem.title}</h1><br/>
            <h3>{poem.author}</h3><br/>
            <p>{poem.text}</p><br/>
        </div>
    )
}

export default Poem
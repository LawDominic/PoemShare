import React from 'react';
import {useParams} from 'react-router-dom'

const Poem = ({poems}) => {
    const id = Number(useParams().id)
    const poem = poems.find(p => p.id === id)

    return (
        <div className="space-y-4 text-gray-900 w-2/3 mx-auto">
            <p class="text-2xl font-semibold ">{poem.title}</p>
            <p>by <i>{poem.author}</i></p><br/>
            <p>{poem.text}</p><br/>
        </div>
    )
}

export default Poem
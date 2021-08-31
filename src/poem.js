import React from 'react';
import {Link} from 'react-router-dom'

const poem = ({poem}) => {
    return (
        <div><b><Link to={`/poems/${poem.id}`}>{poem.title}</Link></b><br/>
        by {poem.author}</div>
    )
}

export default poem
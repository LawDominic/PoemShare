import React from 'react';
import Poem from '../poem.js';

const listStyle = {
    listStyleType: 'none',
    paddingBottom: '20px'
}

const Home = ({poems}) => {

    return (
        <ul>
          {poems.map((poem) => (<li key={poem.id} style={listStyle}><Poem poem={poem}/></li>))}
        </ul>   
    )
  }

  export default Home;
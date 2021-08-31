import React from 'react';
import Poem from '../poem.js';

const Home = ({poems}) => {
    poems.map((poem) => {
        console.log(poem.id);
    })
    return (        
      <ul>
        {poems.map((poem) => (<li key={poem} style={{listStyleType: 'none'}}><Poem poem={poem}/></li>))}
      </ul>
    )
  }

  export default Home;
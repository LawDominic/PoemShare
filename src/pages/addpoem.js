import React, { useState } from 'react';

const AddPoem = ({addPoem}) => {

  const [newPoemTitle, setNewPoemTitle] = useState('')
  const [newPoemAuthor, setNewPoemAuthor] = useState('')
  const [newPoemText, setNewPoemText] = useState('')

  const formHandler = (event) => {
    event.preventDefault()
      const poemObject = {
        title: newPoemTitle,
        author: newPoemAuthor,
        text: newPoemText
    }
    addPoem(poemObject)
  }

  const handleNewPoemTitle = (event) => {
    setNewPoemTitle(event.target.value)
  }

  const handleNewPoemAuthor = (event) => {
    setNewPoemAuthor(event.target.value)
  }

  const handleNewPoemText = (event) => {
    setNewPoemText(event.target.value)
  }

    return (
      <form onSubmit={formHandler}>
            <label htmlFor="title">Poem Title</label>
            <input name="title" onChange={handleNewPoemTitle}/><br/>

            <label htmlFor="author">Poem Author</label>
            <input name="author" onChange={handleNewPoemAuthor}/><br/>

            <label htmlFor="text">Poem Content</label>
            <textarea name="text" cols="40" rows="5" onChange={handleNewPoemText}/><br/>

            <input type="submit"/>
        </form>
    )
  }

export default AddPoem;
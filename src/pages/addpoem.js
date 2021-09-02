import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import style from './markdownCSS.module.css';

const AddPoem = ({addPoem, poems}) => {
  const [showFailedAlert, setShowFailedAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const FailedAlert = () => {
      return (
        showFailedAlert ? (
          <div className={"text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400"}>
            <p className="inline-block align-middle mr-3">
              <b>Failed</b> - make sure none of the fields are empty!
            </p>
            <button className="bg-transparent right-0 top-0 mt-4 mr-6 text-2xl font-bold leading-none absolute focus:outline-none" onClick={() => setShowFailedAlert(false)}>
              <p>×</p>
            </button>
          </div>
        ) : null
    )
  }

  const SuccessAlert = () => {
    const id = poems.length-1
    return (
      showSuccessAlert ? (
        <div className={"text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-400"}>
          <p className="inline-block align-middle mr-3">
            <b>Success</b> - head back to the <Link to={'/'} className="font-base font-semibold">home page</Link> to view your poem or <Link to={`/poems/${id}`} className="font-base font-semibold">directly here</Link>!
          </p>
          <button className="bg-transparent right-0 top-0 mt-4 mr-6 text-2xl font-bold leading-none absolute focus:outline-none" onClick={() => setShowSuccessAlert(false)}>
            <p>×</p>
          </button>
        </div>
      ) : null
  )
}

  const [newPoemTitle, setNewPoemTitle] = useState('')
  const [newPoemAuthor, setNewPoemAuthor] = useState('')
  const [newPoemText, setNewPoemText] = useState('')

  const formHandler = (event) => {
    event.preventDefault()
    if (newPoemTitle.length === 0 || newPoemAuthor.length === 0 || newPoemText.length === 0) {
      setShowFailedAlert(true)
    } else {
      const poemObject = {
        title: newPoemTitle,
        author: newPoemAuthor,
        text: newPoemText
      }
      addPoem(poemObject)
      setShowSuccessAlert(true)
      setNewPoemTitle('')
      setNewPoemAuthor('')
      setNewPoemText('')
    }
    
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
      <div>
          <FailedAlert/>
          <SuccessAlert/>
          <form className="space-y-4 text-gray-900 w-2/3 mx-auto" onSubmit={formHandler}>
          <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1" htmlFor="title">Title</label>
              <input autofocus className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:outline-none" type="text" id="title" value={newPoemTitle} onChange={handleNewPoemTitle}/>
            </div>
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1" htmlFor="author">Author</label>
              <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:outline-none" type="text" id="author" value={newPoemAuthor}onChange={handleNewPoemAuthor}/>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="block mb-1" htmlFor="content">Content</label>
              <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none" type="text" id="content" value={newPoemText} onChange={handleNewPoemText}/>
              <p className="text-xs italic text-right">Please use <a href="https://www.markdownguide.org/basic-syntax/" className="underline">markdown syntax</a> if you require styling.</p>
            </div>

            <div className="w-full mt-5">
            <p>Preview</p>
            <ReactMarkdown children={newPoemText} className={`${style.reactMarkDown} w-full px-3 py-2 border rounded-lg focus:outline-none bg-white`}/>
            </div>
          </div>
          <input type="submit" className="rounded-lg px-4 py-2 bg-blue-400 text-blue-100 hover:bg-blue-300"/>
        </form>
      </div>
    )
  }

export default AddPoem;
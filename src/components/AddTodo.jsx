import React, { useEffect, useState, useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { v4 as uuid } from "uuid";
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const editTodo = useSelector((state) => state.todos.editedTodo)
  const inputRef = useRef(null)

  useEffect(() => {
    if(editTodo.length !== 0){
      setTodo(editTodo[0].todo)
    }
    inputRef.current.focus();
  }, [editTodo])

  function handleChange(e){
    setTodo(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(addTodo({id: uuid(), todo: todo, done:false}))
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12 text-center">
      <input
      ref={inputRef}
        type="text"
        className="sm:w-1/3 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={todo}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo

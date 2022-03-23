import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'


export default function AddItem({newitem,handleSubmit,setNewItem}) {
    const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
        autoFocus
        ref={inputRef}
        id='addItem'
        placeholder='Add Item'
        required
        onChange={(e)=>{setNewItem(e.target.value)}}
        value={newitem}
        type="text" 
        />
        <button
        typr='submit'
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}
        >
        <FaPlus/>
        </button>
    </form>
  )
}

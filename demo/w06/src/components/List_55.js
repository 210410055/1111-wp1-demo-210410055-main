import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List_55 = ( {items ,removeItem} ) => {
  return (
    <div className='grocery-list'>
      { items.map( (item) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
            <button type='button' className='edit-btn'>
              <FaEdit />
            </button>
            <button type='button' className='delete-btn' onClick={()=>removeItem(id)}>
              <FaTrash />
            </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

  


export default List_55
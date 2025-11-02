import React from 'react'
import TodoItem from './TodoItem'
export default function TodoItems ({ itemData ,handleDelete}) {
  return (
    
    
    <div className='item-container' >
    {itemData.map(items => <TodoItem key={items.work} work={items.work} date={items.date} handleDeleteBtn={handleDelete} ></TodoItem> )}
    </div>
  )
}

'use client'
import React, { useState } from 'react'

const TodoList = () => {

  const  [ taskList, setTaskList ] = useState( [ 
    { Text : 'Do Homework', completed : false},
    { Text : 'Learn React', completed : false},
    { Text : 'Brink Milk', completed : false},

   ] );
  console.log(taskList);

    const addNewTask = (e) => {
    console.log (e.key);
    }


  return (
    <div className='bg-primary-subtle vh-100'>

        <div className='container py-5'>
            <h1 className='display-3 fw-bold text-center'>ToDo list</h1>

            <div className='card shadow'>
                <div className='card-header py-3'>

                    <input
                    onKeyDown={addNewTask}
                     type="text"
                    className='form-control border-3 border-primary'
                    placeholder='Enter New Task To Add'
                     />
                </div>
            </div>
        </div>


    </div>
  )
}

export default TodoList
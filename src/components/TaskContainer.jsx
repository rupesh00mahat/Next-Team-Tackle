import React from 'react'
import TaskItem from "./TaskItem"
import {  useDroppable } from '@dnd-kit/core';


function TaskContainer({tasks, containerStatus}) {
  const {setNodeRef} = useDroppable({id: containerStatus});
  return (
    <div ref={setNodeRef} className="task-container border rounded-md px-5 py-8">
    <div className="task-list">
      <h2 className='task-container-heading text-2xl font-bold border-b'>{containerStatus}</h2>
      <ul className='task-list '>
       {tasks && tasks.map(({id, taskStatus,status, task}, index)=>{
      
       if(status == containerStatus){
        return <TaskItem key={`${status}-${index}`} id={id} task={task} taskStatus={taskStatus}/>
       }
      
       })}
      </ul>
    </div>
  </div>
  )
}

export default TaskContainer
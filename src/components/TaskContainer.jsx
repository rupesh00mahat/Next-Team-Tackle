import React from 'react'
import TaskItem from "./TaskItem"
import { useDroppable } from '@dnd-kit/core';


function TaskContainer({ tasks, containerStatus }) {
  const { setNodeRef, isOver } = useDroppable({ id: containerStatus });

  const style = {
    borderColor: isOver? 'red': '#e5e7eb'
  }

  return (
    <div ref={setNodeRef} style={style} className="task-container  border-2 rounded-md ">
      <div className="task-list">
        <h2 className='task-container-heading text-2xl font-bold border-b  p-2 mb-5 shadow-lg text-center'>{containerStatus}</h2>
        <ul className='task-list px-4'>
          {tasks && tasks.map(({ id, taskStatus, status, task }, index) => {

            if (status == containerStatus) {
              return <TaskItem key={`${status}-${index}`} id={id} task={task} taskStatus={taskStatus} />
            }

          })}
        </ul>
      </div>
    </div>
  )
}

export default TaskContainer
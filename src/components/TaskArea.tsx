import React from 'react'
import TaskContainer from "@/components/TaskContainer";

export interface TaskAreaProps {
  id: number,
  status: string,
  taskStatus: string,
  task: string
}

function TaskArea({tasks}: {tasks:TaskAreaProps[]}) {
  return (
    <div className='grid grid-cols-3 gap-10 mt-10'>
      <TaskContainer tasks={tasks} containerStatus={'not-started'}/>
      <TaskContainer tasks={tasks} containerStatus={'ongoing'}/>
      <TaskContainer tasks={tasks} containerStatus={'progress'}/>
    </div>
  )
}

export default TaskArea
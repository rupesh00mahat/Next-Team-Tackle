import { useDraggable } from '@dnd-kit/core';
import React from 'react'

function TaskItem({id, task}:{id:number, task: string}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id});

    const style = {
        transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
    }

    return (
        <li
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
        className="task-item bg-gray-600 text-white text-center p-3 shadow-xl rounded-md mb-5">
           {task}
        </li>
    )
}

export default TaskItem
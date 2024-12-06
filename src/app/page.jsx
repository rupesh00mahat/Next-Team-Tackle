'use client';
import TaskArea from "@/components/TaskArea";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { DndContext } from "@dnd-kit/core";

const socket = io.connect('http://localhost:3001');

export default function Home() {

  const INITIAL_TASKS = [
    {
      id: 1,
      status: 'ongoing',
      task: 'Task 1',

    },
    {
      id: 2,
      status: 'progress',
      task: 'Task 2',

    },
    {
      id: 3,
      status: 'not-started',
      task: 'Task 3',

    },


  ];


  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const newTaskRef = useRef("");

  const addNewTask = () => {
   setTasks((prevTasks) => { return [...prevTasks, { id: tasks.length, status: 'not-started', task: newTaskRef.current.value }] });

  }


  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setTasks(data);
    })
  }, [socket])


  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === active.id ? { ...task, status: over.id } : task
        )
      );
    }
  };




  return (
    <div className="w-[90%] mx-auto">
      <div className="input-area flex gap-10  mt-5">
        <input ref={newTaskRef} className="border w-[60%]" type="text" name="task" id="task" />
        <button
          onClick={addNewTask}
          className="bg-black text-white px-10 py-2">Add Task</button>
      </div>
      <DndContext onDragEnd={handleDragEnd}
        accessibility={typeof window === 'undefined' ? false : undefined}

      >
        <TaskArea tasks={tasks} />
      </DndContext>

      <br />
      <button onClick={() => { socket.emit('send_message', { message: tasks }) }}>Send Message</button>

    </div>
  );
}

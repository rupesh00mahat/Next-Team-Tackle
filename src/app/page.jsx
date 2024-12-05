'use client';
import TaskArea from "@/components/TaskArea";
import UserGreeting from "@/components/UserGreeting";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Example from "@/components/Example"
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

  const [room, setRoom] = useState("1000");
  const [message, setMessage] = useState(tasks);
  const[messageReceived, setMessageReceived] = useState("");

  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      console.log(data);
      setTasks(data);
  })
  },[socket])

  const joinRoom = () => {

    if(room !== ""){
      console.log("emitted"+room)
      socket.emit("join_room", room);
    }
  }

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


  useEffect(()=>{
    setMessage(tasks);
  }, [tasks])

  // droppable



  return (
    <div >
      <DndContext onDragEnd={handleDragEnd}
        accessibility={typeof window === 'undefined' ? false : undefined}

      >
        <TaskArea tasks={tasks} />
      </DndContext>

      <button onClick={()=>{joinRoom()}}>Join Room</button>
      <br/>
      <button onClick={()=>{ socket.emit('send_message', {message, room})}}>Send Message</button>

    </div>
  );
}

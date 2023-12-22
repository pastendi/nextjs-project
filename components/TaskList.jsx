import Link from 'next/link'
import React from 'react'
import DeleteForm from './DeleteForm'
import { getAllTasks } from '@/utils/action'

const TaskList = async () => {
  const tasks = await getAllTasks()
  if (tasks?.length === 0)
    return <h1 className='mt-8 text-2xl font-semibold'>No tasks to show...</h1>
  return (
    <ul className='mt-8 flex flex-col space-y-4'>
      {tasks?.map((task) => (
        <li
          key={task.id}
          className='flex justify-between items-center px-6 py-2'
        >
          <h2
            className={`text-lg capitalize ${task.completed && 'line-through'}`}
          >
            {task.content}
          </h2>
          <div className='flex gap-6 items-center'>
            <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
              edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList

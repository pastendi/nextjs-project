'use client'
import { createTask, createTaskCustom } from '@/utils/action'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'
const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'Please wait...' : 'Create task'}
    </button>
  )
}
const initialState = {
  message: null,
}
const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error')
      return
    }
    if (state.message === 'success') {
      toast.success('the task was created')
    }
  }, [state])
  return (
    <form action={formAction}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskFormCustom

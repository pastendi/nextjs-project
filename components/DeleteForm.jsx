'use client'
import { deleteTask } from '@/utils/action'
import { useFormStatus } from 'react-dom'
const DeleteBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button className='btn btn-xs btn-error' disabled={pending}>
      {pending ? 'Deleting' : 'Delete'}
    </button>
  )
}
const initialState = {
  message: null,
}
const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <DeleteBtn />
    </form>
  )
}

export default DeleteForm

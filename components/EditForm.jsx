'use client'
import { editTask } from '@/utils/action'

const EditForm = ({ task }) => {
  const { id, completed, content } = task
  return (
    <form
      action={editTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg'
    >
      <input type='hidden' name='id' value={id} />
      <input
        type='text'
        name='content'
        defaultValue={content}
        required
        className='input input-bordered w-full'
      />
      <div className='form-control my-4'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>completed</span>
          <input
            type='checkbox'
            name='completed'
            id='completed'
            defaultChecked={completed}
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button type='submit' className='btn btn-primary btn-block btn-sm'>
        Edit
      </button>
    </form>
  )
}

export default EditForm

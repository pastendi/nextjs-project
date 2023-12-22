import EditForm from '@/components/EditForm'
import { getTask } from '@/utils/action'
import Link from 'next/link'

const SingleTask = async ({ params }) => {
  const task = await getTask(params.id)
  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          Back to task
        </Link>
      </div>
      <EditForm task={task} />
    </>
  )
}

export default SingleTask

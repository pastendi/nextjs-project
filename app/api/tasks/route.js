import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  const tasks = await db.task.findMany()
  return NextResponse.json(tasks)
}

export const POST = async (request) => {
  const { content } = await request.json()
  const task = await db.task.create({
    data: { content },
  })
  return Response.json({ msg: 'task created' })
}

import Image from 'next/image'
import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  if (!res.ok) {
    throw new Error(`Couldn't find drink with id ${id}`)
  }
  return res.json()
}
const SingleDrink = async ({ params }) => {
  const data = await getDrink(params.id)
  const name = data?.drinks[0]?.strDrink
  const image = data?.drinks[0]?.strDrinkThumb
  return (
    <div>
      <Link href={'/drinks'} className='btn btn-primary mt-8 mb-12'>
        Back to drinks
      </Link>
      <Image
        src={image}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
        alt={name}
      />
      <h1 className='text-2xl font-semibold'>{name}</h1>
    </div>
  )
}

export default SingleDrink

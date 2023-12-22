import DrinkList from '@/components/DrinkList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const fetchDrinks = async () => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const data = await res.json()
  return data
}
const Drink = async () => {
  const data = await fetchDrinks()
  return (
    <div>
      <DrinkList drinks={data.drinks} />
    </div>
  )
}

export default Drink

import supabase from '../config/SuperbaseClient'
import { useEffect, useState } from 'react'
import SmoothieCart from '../components/SmoothieCart'
import { Smoothie } from '../types/smoothie'

type OrderByField = 'created_at' | 'title' | 'rating'

const Home = () => {
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [smoothies, setSmoothies] = useState<Smoothie[] | null>(null)
  const [orderBy, setOrderBy] = useState<OrderByField>('created_at')

  const onDelete = (id: string) => {
    setSmoothies((prev) => prev?.filter((smoothie) => smoothie.id !== id) ?? null)
  }

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('Smoothies')
        .select('*')
        .order(orderBy, { ascending: false })

      if (error) {
        setFetchError('Could not fetch smoothies')
        setSmoothies(null)
        console.log(error)
      }

      if (data) {
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()
  }, [orderBy])

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('rating')}>Rating</button>
          </div>

          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCart key={smoothie.id} smoothie={smoothie} onDelete={onDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

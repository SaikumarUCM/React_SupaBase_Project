import { Link } from 'react-router-dom'
import supabase from '../config/SuperbaseClient'
import { Smoothie } from '../types/smoothie'

interface SmoothieCartProps {
  smoothie: Smoothie
  onDelete: (id: string) => void
  orderBy?: string
}

const SmoothieCart = ({ smoothie, onDelete, orderBy }: SmoothieCartProps) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('Smoothies')
      .delete()
      .eq('id', smoothie.id)
      .select()
      .order(orderBy ?? 'created_at', { ascending: false })

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
      onDelete(smoothie.id)
    }
  }

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={'/' + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  )
}

export default SmoothieCart

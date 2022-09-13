import { useSelector } from "react-redux"
import { selectPoint } from "../features/slices/pointSlice"

const Point = () => {
  const point = useSelector(selectPoint)

  return (
    <div className="card" style={{margin: '1rem 0'}}>
      <h5>{point.pt}</h5>
    </div>
  )
}

export default Point
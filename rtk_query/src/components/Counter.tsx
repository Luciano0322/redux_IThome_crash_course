import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { minus, plus, selectCounter, setCount } from "../features/slices/counterSlice"

const Counter = () => {
  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()
  const seterRef = useRef<HTMLInputElement>(null)

  const handleMinus = () => dispatch(minus())
  const handlePlus = () => dispatch(plus())
  const handleSetCount = () => {
    if(seterRef.current) {
      if(seterRef.current.value.length > 0) {
        const num = parseInt(seterRef.current.value)
        dispatch(setCount(num))
      } else {
        alert('請先輸入')
      }
    } 
  }
  return (
    <div className="card">
      <h4>Counter Demo</h4>
      <div className="f-c-c" style={{margin: '.5rem 0'}}>
        <button 
          className="btn filled" 
          onClick={handleMinus} 
          style={{margin: '0 .5rem'}}
        >
          -
        </button>
        <p>{counter.count}</p>
        <button 
          className="btn filled" 
          onClick={handlePlus} 
          style={{margin: '0 .5rem'}}
        >
          +
        </button>
      </div>
      <div className="f-c-c" style={{padding: '.25rem'}}>
        <input type="number" ref={seterRef} />
        <button
          className="btn filled"
          onClick={handleSetCount}
          style={{margin: '0 .5rem', padding: '.25rem .5rem'}}
        >
          設定
        </button>
      </div>
    </div>
  )
}

export default Counter
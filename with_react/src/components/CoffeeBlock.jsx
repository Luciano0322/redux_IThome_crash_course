import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coffeeOrdered, selectCoffee } from '../features/slices/coffeeSlice'

const CoffeeBlock = () => {
  const coffee = useSelector(selectCoffee)
  const dispatch = useDispatch()
  // 這裡採 react 簡單的 useRef 來處理
  const coffeeOrderQtyRef = useRef(null)
  const coffeeOrderMoneyRef = useRef(null)
  const doOrderCoffee = () => {
    const sendData = {
      qty: coffeeOrderQtyRef.current.value,
      money: coffeeOrderMoneyRef.current.value
    }
    dispatch(coffeeOrdered(sendData))
  }
  console.log('coffee', coffee);
  return (
    <div>
      <h4>咖啡存量 {coffee.numOfCoffee}</h4>
      <fieldset>
        <legend>咖啡購買</legend>
        <div>
          <label htmlFor="coffeeQty">數量</label>
          <input id="coffeeQty" type="number" ref={coffeeOrderQtyRef} />
        </div>
        <div>
          <label htmlFor="coffeeMoney">價錢</label>
          <input id="coffeeMoney" type="number" ref={coffeeOrderMoneyRef} />
        </div>
        <button onClick={doOrderCoffee}>
          購買
        </button>
      </fieldset>
    </div>
  )
}

export default CoffeeBlock
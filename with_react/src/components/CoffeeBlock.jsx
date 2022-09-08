import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coffeeOrdered, coffeeRestocked, selectCoffee } from '../features/slices/coffeeSlice'

const CoffeeBlock = () => {
  const coffee = useSelector(selectCoffee)
  const dispatch = useDispatch()
  // 這裡採 react 簡單的 useRef 來處理
  // 購買
  const coffeeOrderQtyRef = useRef(null)
  const coffeeOrderMoneyRef = useRef(null)
  // 進貨
  const coffeeRestockQtyRef = useRef(null)
  const coffeeRestockMoneyRef = useRef(null)
  // 購買送出
  const doOrderCoffee = () => {
    const sendData = {
      qty: coffeeOrderQtyRef.current.value,
      money: coffeeOrderMoneyRef.current.value
    }
    dispatch(coffeeOrdered(sendData))
  }
  // 進貨送出
  const doRestockCoffee = () => {

    const sendData = {
      qty: coffeeRestockQtyRef.current.value,
      money: coffeeRestockMoneyRef.current.value
    }
    dispatch(coffeeRestocked(sendData))
  }
  console.log('coffee', coffee);
  return (
    <div>
      <h4>咖啡存量 {coffee.numOfCoffee}</h4>
      <fieldset>
        <legend>咖啡購買</legend>
        <div>
          <label htmlFor="coffeeOrderQty">數量</label>
          <input id="coffeeOrderQty" type="number" ref={coffeeOrderQtyRef} />
        </div>
        <div>
          <label htmlFor="coffeeOrderMoney">價錢</label>
          <input id="coffeeOrderMoney" type="number" ref={coffeeOrderMoneyRef} />
        </div>
        <button onClick={doOrderCoffee}>
          購買
        </button>
      </fieldset>
      <fieldset>
        <legend>咖啡進貨</legend>
        <div>
          <label htmlFor="coffeeRestockQty">數量</label>
          <input id="coffeeRestockQty" type="number" ref={coffeeRestockQtyRef} />
        </div>
        <div>
          <label htmlFor="coffeeRestockMoney">價錢</label>
          <input id="coffeeRestockMoney" type="number" ref={coffeeRestockMoneyRef} />
        </div>
        <button onClick={doRestockCoffee}>
          進貨
        </button>
      </fieldset>
    </div>
  )
}

export default CoffeeBlock
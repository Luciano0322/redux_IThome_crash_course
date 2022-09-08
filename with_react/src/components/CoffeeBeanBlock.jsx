import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coffeeBeanOrdered, coffeeBeanRestocked, selectCoffeeBean } from '../features/slices/coffeeBeanSlice'

const CoffeeBeanBlock = () => {
  const coffeeBean = useSelector(selectCoffeeBean)
  const dispatch = useDispatch()
  // 購買
  const coffeeBeanOrderQtyRef = useRef(null)
  const coffeeBeanOrderMoneyRef = useRef(null)
  // 進貨
  const coffeeBeanRestockQtyRef = useRef(null)
  const coffeeBeanRestockMoneyRef = useRef(null)
  // 購買送出
  const doOrderCoffeeBean = () => {
    const sendData = {
      qty: coffeeBeanOrderQtyRef.current.value || 0,
      money: coffeeBeanOrderMoneyRef.current.value || 0
    }
    dispatch(coffeeBeanOrdered(sendData))
  }
  // 進貨送出
  const doRestockCoffeeBean = () => {

    const sendData = {
      qty: coffeeBeanRestockQtyRef.current.value || 0,
      money: coffeeBeanRestockMoneyRef.current.value || 0
    }
    dispatch(coffeeBeanRestocked(sendData))
  }
  console.log('咖啡豆', coffeeBean);

  return (
    <div>
      <h4>咖啡豆存量 {coffeeBean.numOfCoffeeBean}</h4>
      <fieldset>
        <legend>咖啡豆購買</legend>
        <div>
          <label htmlFor="coffeeBeanOrderQty">數量</label>
          <input id="coffeeBeanOrderQty" type="number" ref={coffeeBeanOrderQtyRef} />
        </div>
        <div>
          <label htmlFor="coffeeBeanOrderMoney">價錢</label>
          <input id="coffeeBeanOrderMoney" type="number" ref={coffeeBeanOrderMoneyRef} />
        </div>
        <button onClick={doOrderCoffeeBean}>
          購買
        </button>
      </fieldset>
      <fieldset>
        <legend>咖啡豆進貨</legend>
        <div>
          <label htmlFor="coffeeBeanRestockQty">數量</label>
          <input id="coffeeBeanRestockQty" type="number" ref={coffeeBeanRestockQtyRef} />
        </div>
        <div>
          <label htmlFor="coffeeBeanRestockMoney">價錢</label>
          <input id="coffeeBeanRestockMoney" type="number" ref={coffeeBeanRestockMoneyRef} />
        </div>
        <button onClick={doRestockCoffeeBean}>
          進貨
        </button>
      </fieldset>
    </div>
  )
}

export default CoffeeBeanBlock
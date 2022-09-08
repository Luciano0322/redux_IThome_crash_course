import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeOrdered, cakeRestocked, selectCake } from '../features/slices/cakeSlice'

const CakeBlock = () => {
  const cake = useSelector(selectCake)
  const dispatch = useDispatch()
  // 購買
  const cakeOrderQtyRef = useRef(null)
  const cakeOrderMoneyRef = useRef(null)
  // 進貨
  const cakeRestockQtyRef = useRef(null)
  const cakeRestockMoneyRef = useRef(null)
  // 購買送出
  const doOrderCake = () => {
    const sendData = {
      qty: cakeOrderQtyRef.current.value || 0,
      money: cakeOrderMoneyRef.current.value || 0
    }
    dispatch(cakeOrdered(sendData))
  }
  // 進貨送出
  const doRestockCake = () => {

    const sendData = {
      qty: cakeRestockQtyRef.current.value || 0,
      money: cakeRestockMoneyRef.current.value || 0
    }
    dispatch(cakeRestocked(sendData))
  }
  console.log('蛋糕', cake);

  return (
    <div>
      <h4>蛋糕存量 {cake.numOfCake}</h4>
      <fieldset>
        <legend>蛋糕購買</legend>
        <div>
          <label htmlFor="cakeOrderQty">數量</label>
          <input id="cakeOrderQty" type="number" ref={cakeOrderQtyRef} />
        </div>
        <div>
          <label htmlFor="cakeOrderMoney">價錢</label>
          <input id="cakeOrderMoney" type="number" ref={cakeOrderMoneyRef} />
        </div>
        <button onClick={doOrderCake}>
          購買
        </button>
      </fieldset>
      <fieldset>
        <legend>蛋糕進貨</legend>
        <div>
          <label htmlFor="cakeRestockQty">數量</label>
          <input id="cakeRestockQty" type="number" ref={cakeRestockQtyRef} />
        </div>
        <div>
          <label htmlFor="cakeRestockMoney">價錢</label>
          <input id="cakeRestockMoney" type="number" ref={cakeRestockMoneyRef} />
        </div>
        <button onClick={doRestockCake}>
          進貨
        </button>
      </fieldset>
    </div>
  )
}

export default CakeBlock
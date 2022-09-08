import React from 'react'
import { useSelector } from 'react-redux'
import { selectAssets } from '../features/slices/assetsSlice'

const AssetsBlock = () => {
  const assets = useSelector(selectAssets)
  return (
    <div>
      <h4>資金 {assets.money}</h4>
    </div>
  )
}

export default AssetsBlock
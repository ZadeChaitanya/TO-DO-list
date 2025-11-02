import React from 'react'

let Welcome = ({ itemData }) => {
  return (
    itemData.length === 0 && (
      <h1 className=' text-center text-primary mt-5  fw-bold'>
        {' '}
        ENJOY YOUR DAY{' '}
      </h1>
    )
  )
}
export default Welcome

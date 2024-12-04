import React from 'react'
import FoodHeader from './FoodHeader'
import MenuSection from './MenuSection'
import FoodProvider from './context/FoodProvider'

const FoodHome = () => {
  return (
    <div className='md:p-10 '>
        <FoodProvider >
        <FoodHeader />
        <MenuSection />
        </FoodProvider>
    </div>
  )
}

export default FoodHome
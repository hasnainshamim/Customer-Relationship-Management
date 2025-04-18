import React from 'react'
import Formes from '../../components/Form'
import BarChartExample from '../../components/charts/TinyBarChart'

const Deals = () => {
  return (
    <>
      <div className='mb-5'>
      <BarChartExample />
      </div>
      <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]} />
    </>
  )
}

export default Deals
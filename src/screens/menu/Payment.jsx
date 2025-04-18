import React from 'react'
import Formes from '../../components/Form'
import AreaChartComponent from '../../components/charts/AreaChart'

const Payment = () => {
  return (<>
    <div className='mb-5'>
      <AreaChartComponent  />
    </div>
    <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]} />
  </>
  )
}

export default Payment
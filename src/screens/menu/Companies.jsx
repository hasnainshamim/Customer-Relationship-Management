import React from 'react'
import Formes from '../../components/Form'
import LineChartComponent from '../../components/charts/LineChart'

const Companies = () => {
  return (
         <>
              <div className='mb-5'>
              <LineChartComponent />
              </div>
              <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]} />
            </>
  )
}

export default Companies
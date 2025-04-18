import React from 'react'
import Formes from '../../components/Form'
import ScatterChartCmp from '../../components/charts/ScatterChart'
const Lists = () => {
  return (
    <>
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
   <ScatterChartCmp/>
   </div>
    <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]}/>
    </>
  )
}

export default Lists
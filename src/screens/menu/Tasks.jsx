import React from 'react'
import Formes from '../../components/Form'
import ShapeBarChart from '../../components/charts/ShapeBarChart'

const Tasks = () => {
  return (
     <>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6 bg-white shadow-sm">
       <ShapeBarChart/>
       </div>
        <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]}/>
        </>
  )
}

export default Tasks
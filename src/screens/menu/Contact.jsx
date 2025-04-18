import React from 'react'
import Formes from '../../components/Form'
import Performance from '../../components/charts/Performance';

const Contact = () => {
  // Sample data for charts
  const performanceData = [
    { name: 'John', deals: 14, rank: 1 },
    { name: 'Sarah', deals: 8, rank: 2 },
    { name: 'Mike', deals: 6, rank: 3 },
    { name: 'Emma', deals: 5, rank: 4 },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Top Performers */}
        <Performance sizer={3}/>

      </div >
      <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]} />
    </>
  )
}

export default Contact
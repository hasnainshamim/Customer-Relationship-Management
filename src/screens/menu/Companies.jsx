import React from 'react'
import Formes from '../../components/Form'

const Companies = () => {
  return (
    <div>
      <Formes tableRow={["COMPANY NAME", "COMPANY OWNER", "CREATE DATE (GMT+5)", "PHONE NUMBER", "LAST ACTIVITY DATE (GML)"]}/>
    </div>
  )
}

export default Companies
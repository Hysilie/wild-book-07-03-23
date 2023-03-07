import React from 'react'
import Wilder from './Wilder'
import wildersData from "../data/wilders"

function WildersList() {

  return (
    <section className="card-row">
        {wildersData?.map((wilder) => <Wilder {...wilder}/>)}
   </section>
  )
}

export default WildersList
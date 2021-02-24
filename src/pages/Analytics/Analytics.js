import React from 'react'
import Auxiliary from '../../scripts/Auxiliary/Auxiliary'
import Navigation from '../../components/Navigation/Navigation'
import Coincide from '../../components/Coincide/Coincide'
import Graphic from '../../components/Graphic/Graphic'

function Analytics() {
  const analytics = JSON.parse(localStorage.getItem('analyticsObject'))

  return (
    <Auxiliary>
      <Navigation />
      <Coincide analytics={analytics} />
      <Graphic analytics={analytics} />
    </Auxiliary>
  )
}

export default Analytics

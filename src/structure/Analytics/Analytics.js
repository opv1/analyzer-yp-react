import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Navigation from '../../containers/Navigation/Navigation';
import Coincide from '../../containers/Coincide/Coincide';
import Graphic from '../../containers/Graphic/Graphic';

function Analytics() {
  const analytics = JSON.parse(localStorage.getItem('analyticsObject'));

  return (
    <Auxiliary>
      <Navigation />
      <Coincide analytics={analytics} />
      <Graphic analytics={analytics} />
    </Auxiliary>
  );
}

export default Analytics;

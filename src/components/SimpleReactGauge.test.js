import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactGauge from './SimpleReactGauge';

it('SimpleReactGauge renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleReactGauge />, div);
});

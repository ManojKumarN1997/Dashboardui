import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Registration from './Registration';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />,<Registration />, div);
  ReactDOM.unmountComponentAtNode(div);
});

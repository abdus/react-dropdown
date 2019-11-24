import React from 'react';
import { render } from 'react-dom';
import { DropDown } from './lib';

const App = () => (
  <div style={{ width: '80vw', margin: '15px auto' }}>
    <h1>Hello React</h1>
    <DropDown options={['React', 'Node', 'Angular', 'Express']} />
    lorem impsum dolor sem ametu
  </div>
);

render(<App />, document.getElementById('root'));

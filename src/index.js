import React from 'react';
import { render } from 'react-dom';
import { DropDown } from './lib';

const App = () => (
  <div style={{ width: '80vw', margin: '15px auto' }}>
    <h1>Hello React</h1>
    <DropDown
      onOptionSelect={e => console.log(e.value)}
      options={['React', 'Node', 'Angular', 'Express']}
      color='#fff'
      backgroundColor='#141414'
      ddMenuBackgroundColor='pink'
    />
    lorem impsum dolor sem ametu
  </div>
);

render(<App />, document.getElementById('root'));

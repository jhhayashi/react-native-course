import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = (props) => (
  <div style={styles}>
    <h2>{props.count}</h2>
  </div>
);

const App2 = function(props) {
  return (
    <div style={styles}>
      <h2>{props.count}</h2>
    </div>
  )
}
let count = 0

setInterval(
  function() {render(<App2 count={count++} />, document.getElementById('root'))},
  1000
)

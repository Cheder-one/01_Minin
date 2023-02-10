import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const elem = <h1>Hello</h1>

const Component = () => {
   return elem
}

reactDom.render(<Component />, document.getElementById('root'))


console.log('yoooooooooooooo');


import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Auth from './Auth';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});

var React = require('react');
var ReactDOM = require('react-dom');
var MusicContainer = require('./components/musicContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    < MusicContainer/>,
    document.getElementById('app')
  );
}

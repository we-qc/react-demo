let React = require('react');
let ReactDOM = require('react-dom');

require('./style.less');

let Index = require('./components/index.js');


ReactDOM.render(<Index />, document.getElementById('content'));
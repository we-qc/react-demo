var React = require('react');
var SubNav = require('./subNav.js');
var MainList = require('./mainList.js');
var SideBar = require('./sideBar.js');

var Index = React.createClass({
    render: function () {
        return (
        	<div className="uk-container uk-container-center">
            	<SubNav />
            	<div className="uk-grid">
            		<MainList />
            		<SideBar />
            	</div>
            </div>
        );
    }
});

module.exports = Index;
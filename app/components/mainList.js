var React = require('react');
var MainListNav = require('./mainListNav.js');
var MainListItem =require('./mainListItem.js');

var MainList = React.createClass({
	render: function() {
		return (
			<div className="uk-width-medium-3-4 uk-row-first">
                <div className="uk-panel uk-panel-box">
                	<MainListNav />
                	<hr className="uk-article-divider" />
                	<MainListItem />
                </div>
            </div>
		)
	}
});

module.exports = MainList;
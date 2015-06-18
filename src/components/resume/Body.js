const React = require('react');
const Sidebar = require('./Sidebar');
const Experience = require('./Experience');

let Body = React.createClass({
	render(){
		return (
			<div className="body-wrapper">
				<Sidebar/>
				<Experience/>
			</div>
		);
	}
});

module.exports = Body;
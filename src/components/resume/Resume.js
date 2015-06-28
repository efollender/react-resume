const React = require('react');
const {RouteHandler} = require('react-router');
const Navigation = require('./Navigation');
const Header = require('./Header');
const Experience = require('./Experience');

let Resume = React.createClass({
	render(){
		return (
			<div className="resume-wrapper">
				<Navigation/>
				<RouteHandler/>
			</div>
			);
	}
});

module.exports = Resume;
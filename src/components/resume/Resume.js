const React = require('react');
const Header = require('./Header');
const Body = require('./Body');

let Resume = React.createClass({
	render(){
		return (
			<div className="resume-wrapper">
				<Header/>
				<Body/>
			</div>
			);
	}
});

module.exports = Resume;
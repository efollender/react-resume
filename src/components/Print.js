const React = require('react');
const Header = require('./resume/Header');
const Body = require('./resume/Body');

let Print = module.exports = React.createClass({
	render(){
		return (
			<div className="print-resume-wrapper">
				<Header/>
				<Body/>
			</div>
			);
	}
});
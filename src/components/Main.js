const React = require('react');
const Resume = require('./resume/Resume');

let Main = React.createClass({
	render(){
		return (
			<div>
				<Resume/>
			</div>
			);
	}
});

module.exports = Main;
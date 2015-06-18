const React = require('react');

let Header = React.createClass({
	render(){
		return (
			<div className="header-wrapper">
				<div className="header-title">
					<h1>Emma Follender</h1>
					<h2>Front-end Developer</h2>
				</div>
			</div>
		);
	}
});

module.exports = Header;
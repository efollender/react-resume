const React = require('react');

let Contact = React.createClass({
	render(){
		return (
			<div className="sidebar-contact-info">
					<p>
						<a href="mailto:efollender@gmail.com">
							<span className="entypo-mail"></span>
							{" efollender@gmail.com"}
						</a>
					</p>
					<p>
						<a href="http://www.emmafollender.com">
							<span className="entypo-monitor"></span>
							{" www.emmafollender.com"}
						</a>
					</p>
					<p>
						<a href="http://github.com/efollender">
							<span className="entypo-github"></span>
							{" http://github.com/efollender"}
						</a>
					</p>
					<p>
						<a href="http://twitter.com/efollender">
							<span className="entypo-twitter"></span>
							{" @efollender"}
						</a>
					</p>
				</div>
		);
	}
});

module.exports = Contact;
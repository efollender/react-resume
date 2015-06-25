const React = require('react');

let Education = React.createClass({
	render(){
		return (
			<div className="sidebar-education">
					<div className="sidebar-education-title">
						<h3>Education</h3>
					</div>
					<p>
							<strong>NYU Poly </strong>
							2013<br/>
							<em>Computer Science</em>
						</p>
				</div>
		);
	}
});

module.exports = Education;
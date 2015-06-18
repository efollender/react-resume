const React = require('react');
const Skill = require('./Skill');

let Sidebar = React.createClass({
	render(){
		return (
			<div className="sidebar-wrapper">
				<div className="sidebar-contact-info">
					<p>
						<a href="mailto:efollender@gmail.com">
							efollender@gmail.com
						</a>
					</p>
					<p>
						<a href="http://www.emmafollender.com">
							www.emmafollender.com
						</a>
					</p>
					<p>
						<a href="http://github.com/efollender">
							http://github.com/efollender
						</a>
					</p>
					<p>
						<a href="http://twitter.com/efollender">
							@efollender
						</a>
					</p>
				</div>
				<div className="sidebar-skills">
					<div className="sidebar-skills-title">
						<h3>Skills</h3>
					</div>
					<Skill level={5} title="jQuery" />
					<Skill level={5} title="AngularJs" />
					<Skill level={5} title="Javascript" />
					<Skill level={5} title="ReactJs" />
					<Skill level={5} title="Ruby" />
					<Skill level={5} title="CSS3" />
					<Skill level={5} title="HTML5" />
					<Skill level={5} title="Adobe CS" />
				</div>
				<div className="sidebar-education">
					<div className="sidebar-education-title">
						<h3>Education</h3>
					</div>
				</div>
				<div className="sidebar-recognition">
					<div className="sidebar-recognition-title">
						<h3>Recognition</h3>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Sidebar;
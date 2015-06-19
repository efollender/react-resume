const React = require('react');
const Skill = require('./Skill');

let Sidebar = React.createClass({
	getInitialState(){
		return {
			collapse: false
		}
	},
	collapseSkills(){
		this.setState({
			collapse: !this.state.collapse
		});
	},
	render(){
		return (
			<div className="sidebar-wrapper">
				<div className="sidebar-contact-info">
					<p>
						<a href="mailto:efollender@gmail.com">
							<span className="entypo-mail"></span> efollender@gmail.com
						</a>
					</p>
					<p>
						<a href="http://www.emmafollender.com">
							<span className="entypo-monitor"></span> www.emmafollender.com
						</a>
					</p>
					<p>
						<a href="http://github.com/efollender">
							<span className="entypo-github"></span> http://github.com/efollender
						</a>
					</p>
					<p>
						<a href="http://twitter.com/efollender">
							<span className="entypo-twitter"></span> @efollender
						</a>
					</p>
				</div>
				<div className="sidebar-skills">
					<div className="sidebar-skills-title">
						<h3>Skills</h3>
						<div 
							className="entypo-minus toggle-button"
							onClick={this.collapseSkills}
						/>
					</div>
					<div className={this.state.collapse ? "sidebar-skill-list-wrapper collapsed" : "sidebar-skill-list-wrapper"}>
						<Skill level={5} title="jQuery" />
						<Skill level={2} title="AngularJs" />
						<Skill level={4} title="Javascript" />
						<Skill level={1} title="ReactJs" />
						<Skill level={5} title="Ruby" />
						<Skill level={3} title="CSS3" />
						<Skill level={5} title="HTML5" />
						<Skill level={5} title="Adobe CS" />
					</div>
				</div>
				<div className="sidebar-education">
					<div className="sidebar-education-title">
						<h3>Education</h3>
					</div>
					<p>
							<strong>NYU Poly</strong>
							2013, 
							<em>Computer Science</em>
						</p>
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
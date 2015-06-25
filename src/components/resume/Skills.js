const React = require('react');
const Skill = require('./Skill');

let Skills = React.createClass({
	render(){
		return (
		<div className="sidebar-skills">
					<div className="sidebar-skills-title">
						<h3>Skills</h3>
						<div 
							className="entypo-minus toggle-button"
							onClick={this.collapseSkills}
						/>
					</div>
					<div className={"sidebar-skill-list-wrapper"}>
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
			);
	}
});

module.exports = Skills;
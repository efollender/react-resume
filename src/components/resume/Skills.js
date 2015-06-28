const React = require('react');
const Skill = require('./Skill');

let Skills = React.createClass({
	render(){
		return (
		<div className="sidebar-skills">
					<div className="sidebar-skills-title">
						<h3>Skills</h3>
					</div>
					<div className={"sidebar-skill-list-wrapper"}>
						<Skill level={5} title="jQuery" />
						<Skill key={Math.random()*3} level={2} title="AngularJs" />
						<Skill key={Math.random()*3} level={4} title="Javascript" />
						<Skill key={Math.random()*3} level={1} title="ReactJs" />
						<Skill key={Math.random()*3} level={5} title="Ruby" />
						<Skill key={Math.random()*3} level={3} title="CSS3" />
						<Skill key={Math.random()*3} level={5} title="HTML5" />
						<Skill key={Math.random()*3} level={5} title="Adobe CS" />
					</div>
				</div>
			);
	}
});

module.exports = Skills;
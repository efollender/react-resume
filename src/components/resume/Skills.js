const React = require('react');
const Skill = require('./Skill');

let Skills = React.createClass({
	getInitialState(){
		return {
			skills:[
				{
					title: 'Javascript',
					level: 4
				},
				{
					title: 'jQuery',
					level: 6
				},
				{
					title: 'AngularJs',
					level: 3
				},
				{
					title: 'ReactJs',
					level: 5
				},
				{
					title: 'Ruby',
					level: 4
				},
				{
					title: 'CSS3',
					level: 5
				},
				{
					title: 'HTML5',
					level: 6
				},

			],
			activeSkill: null
		}
	},
	componentDidMount(){
		this.setSkill(this.state.skills[0]);
	},
	setSkill(skill){
		this.setState({
			activeSkill: skill
		});
	},
	render(){
		return (
		<div className="sidebar-skills">
					<div className="sidebar-skills-title">
						<h3>Skills</h3>
					</div>
					<div className={"sidebar-skill-list-wrapper"}>
					{this.state.skills.map( (el, index)=>{
						return (
							<div
								key={index} 
								onClick={this.setSkill.bind(this, el)}
								className={this.state.activeSkill == el ? "skill-title active" : "skill-title"}>
								{el.title}
							</div>
							)
					})}
					{this.state.activeSkill && 
						<Skill 
							onClick={this.setSkill}
							level={this.state.activeSkill.level} 
							title={this.state.activeSkill.title} />
					}
					</div>
				</div>
			);
	}
});

module.exports = Skills;
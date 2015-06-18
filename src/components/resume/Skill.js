const React = require('react');

let Skill = React.createClass({
	propType: {
		title: React.PropTypes.string,
		level: React.PropTypes.number
	},
	levels(levelNum){
		var levelArray = Array();
		for( var i; i=0;i<this.props.level){
			levelArray.push(
				<div key={index}>COFFEE</div>
			);
		}
		console.log(levelArray);
	},
	render(){
		return (
			<div className="skill-wrapper">
				<div className="skill-title">
					{this.props.title}
				</div>
				<div className="skill-java-wrapper">
					{this.props.level && 
						this.levels(this.props.level)
					}
				</div>
			</div>
		);
	}
});

module.exports = Skill;
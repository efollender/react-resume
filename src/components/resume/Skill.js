const React = require('react');
let Coffee = require('../svg/Coffee');

let Skill = React.createClass({
	propType: {
		title: React.PropTypes.string,
		level: React.PropTypes.number
	},
	createArrFromNum(num){
		return Array.apply(null, Array(num)).map(function (_, i) {return i;});
	},
	levels(levelNum, shaded){
		let levelArray = this.createArrFromNum(levelNum);
		return levelArray.map(function(key, index){
			return <Coffee shaded={shaded} />
		});
	},
	render(){
		return (
			<div className={"skill-wrapper"}>
				<div className="skill-title">
					{this.props.title}
				</div>
				<div className="skill-java-wrapper">
					{this.props.level && 
						this.levels(this.props.level, true)
					}
					{this.props.level &&
						this.levels((6-this.props.level), false)
					}
				</div>
			</div>
		);
	}
});

module.exports = Skill;
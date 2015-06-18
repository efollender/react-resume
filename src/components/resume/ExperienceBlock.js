const React = require('react');

let ExperienceBlock = React.createClass({
	propTypes: {
		company: React.PropTypes.string,
		position: React.PropTypes.string,
		date: React.PropTypes.string,
		description: React.PropTypes.string
	},
	render(){
		return (
			<div className="experience-section">
				<h4>{this.props.company}</h4>
				<h4 className="position-title">{this.props.title}</h4>
				<h5>{this.props.date}</h5>
				<p>
					{this.props.description}
				</p>
			</div>
		);
	}
});

module.exports = ExperienceBlock;
const React = require('react');

let ExperienceBlock = React.createClass({
	propTypes: {
		company: React.PropTypes.string,
		position: React.PropTypes.string,
		date: React.PropTypes.string,
		description: React.PropTypes.string,
		featuredProject: React.PropTypes.string
	},
	render(){
		return (
			<div className={this.props.featuredProject ? "experience-section featured" : "experience-section"}>
				<div className="experience-section-main">
					<h4>{this.props.company}</h4>
					<h4 className="position-title">{this.props.title}</h4>
					<h5>{this.props.date}</h5>
					<p dangerouslySetInnerHTML={{__html: this.props.description}} />
				</div>
				{this.props.featuredProject &&
					<div className="experience-section-featured">
						<h4>Featured Project</h4>
						<p dangerouslySetInnerHTML={{__html: this.props.featuredProject}} />
					</div>
				}
			</div>
		);
	}
});

module.exports = ExperienceBlock;
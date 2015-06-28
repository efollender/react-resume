const React = require('react');
const {Link} = require('react-router');

let Navigation = React.createClass({
	render(){
		return (
			<ul className="resume-navigation">
				<Link to="experience">
					<li data-section="Experience"></li>
				</Link>
				<Link to="skills">
					<li data-section="Skills"></li>
				</Link>
				<li data-section="Recognition"></li>
				<li data-section="Portfolio"></li>
			</ul>
		);
	}
});

module.exports = Navigation;
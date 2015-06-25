const React = require('react');
const Skills = require('./Skills');
const Contact = require('./Contact');
const Education = require('./Education');
const Recognition = require('./Recognition');

let Sidebar = React.createClass({
	getInitialState(){
		return {
			collapse: false
		}
	},
	collapseSkills(e){
		//e.preventDefault();
		let skill = document.getElementsByClassName('sidebar-skill-list-wrapper');
		[].slice.call(skill).forEach(function(el){
			if(el.getAttribute('class').split(' ').length > 1){
				el.setAttribute('class', 'sidebar-skill-list-wrapper');
			} else {
				el.setAttribute('class', 'sidebar-skill-list-wrapper collapsed');
			}
		});
	},
	render(){
		return (
			<div className="sidebar-wrapper">
				<Contact/>
				<Skills/>
				<Education/>
				<Recognition/>
			</div>
		);
	}
});

module.exports = Sidebar;
const React = require('react');
const classNames = require('classnames');
const ExperienceBlock = require('./ExperienceBlock');

let Experience = React.createClass({
	getInitialState(){
		return {
			experience: [
				{
					company: "Brooklyn United",
					title: "Web Developer",
					date: "December 2014-present",
					description: 	"As a developer at Brooklyn United, I work closely\
									with the design team to produce highly responsive sites that\
									leverage experimental design concepts. Most recently, I built\
									a custom Wordpress blog using Twig, Gulp, and Stylus. Internal\
									projects include an API built with Node and React to control\
									the office Spotify account and output to a Raspberry Pi that\
									we connected to speakers.",
					featuredProject:	'<a href="http://doggerel.arup.com" class="project-link">\
										doggerel.arup.com</a><br/>\
										Developed a custom Wordpress theme for the global \
										engineering firm, Arup. Each page template incorporated multiple \
										dynamic components. Analytics were used to determine and\
										display popular articles. The theme involved heavy use of custom \
										post types and meta fields. Build tools included Twig, Gulp, and Stylus.<br/>\
										<strong>Featured on</strong>: <a href="http://www.cssawds.com/website/doggerel/">\
										http://www.cssawds.com/website/doggerel/</a>'
				},
				{	company:"Makersquare",
					title:"Immersive Software Engineering Student",
					date:"July 2014-October 2014",
					description: 
						'I chose to attend Maker Square, a 12-week\
						accelerated learning program that teaches\
						modern web application development, to\
						improve my skillset and my efficiency as a\
						developer. During the program, I\
						developed multiple applications that\
						employed the use of Sass, Bootstrap,\
						Foundation, and AngularJs. While I worked\
						with backend technologies including\
						PostgreSQL and MongoDB, I focused\
						primarily on front-end development with\
						Javascript and JS framework.',
					featuredProject:
						'<a href="https://github.com/dkellis42/COdeWORK" class="project-link">\
						CO(de)WORK</a><br/>\
						An app that connects coders to other coders nearby, \
						based on their areas of expertise, location, and\
						problems they may need some guidance solving. Built on MongoDB, \
						Express, AngularJS, and Node.JS, and integrates the Google Maps API, \
						Foursquare API, Socket.IO and Pubnub. I created mock-ups which \
						I translated into code, using Sass for styling and Angular for \
						dynamic templating. I integrated all APIs and wrote \
						front-end Javascript.'
				},
				{
					company: 'Scarinci Hollenbeck',
					title: 'Web Developer',
					date: 'January 2012-July 2014',
					description: "Redesigned the company website and wrote\
							a custom responsive Wordpress template for it.\
							<br/><br/>\
							Converted previous designs into modern\
							UX/UI experiences, and static HTML pages\
							into dynamically populated views using PHP\
							templating.\
							<br/><br/>\
							Went through the same process for multiple\
							company blogs and minisites."

				},
				{
					company: 'Seeds of Peace',
					title: 'Communications intern',
					date: 'January 2012 - July 2012',
					description: "Designed graphics and ads including\
							one for Gotham Magazine, using Creative Suite.\
							<br/><br/>\
							Transferred of content from the old site design to the new one.\
							<br/><br/>\
							Built out basic page layouts for the new site using HTML and CSS."

				}
			]
		}
	},
	setActive(e){
		this.setState({
			activeBlock:  this.state.experience[e],
			open: true
		});
	},
	render(){
		return (
			<div className={classNames("experience-wrapper", {"above":this.state.open})}>
				<h3>Experience</h3>
				<div className={classNames("expanded-experience", {'open':this.state.open})}>
					{this.state.activeBlock && 
						<div className="expanded-experience-description">
						<p dangerouslySetInnerHTML={{__html: this.state.activeBlock.description}}/>
						</div>
					}
				</div>
				<div className={classNames({'no-relative':this.state.open}, "experience-block-wrapper")}>
				{
					this.state.experience &&
					this.state.experience.map((el,index) => {
						return (
							<ExperienceBlock
								isActive={this.state.activeBlock == el}
								onClick={this.setActive.bind(this, index)}
								key={index}
								company={el.company}
								title={el.title}
								date={el.date}
								description={el.description}
							/>
						)
					})
				}
				</div>
			</div>
		);
	}
});

module.exports = Experience;
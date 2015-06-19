const React = require('react');
const ExperienceBlock = require('./ExperienceBlock');

let Experience = React.createClass({
	render(){
		return (
			<div className="experience-wrapper">
				<h3>Experience</h3>
				<div className="experience-section featured">
					<ExperienceBlock
						company="Makersquare"
						title="Immersive Software Engineering Student"
						date="July 2014-October 2014"
						description="I chose to attend Maker Square, a 12-week
							accelerated learning program that teaches
							modern web application development, to
							improve my skillset and my efficiency as a
							developer. During the program, I
							developed multiple applications that
							employed the use of Sass, Bootstrap,
							Foundation, and AngularJs. While I worked
							with backend technologies including
							PostgreSQL and MongoDB, I focused
							primarily on front-end development with
							Javascript and JS frameworks."
					/>
				</div>
				<ExperienceBlock
						company="Scarinci Hollenbeck"
						title="Web Developer"
						date="January 2012-July 2014"
						description="Redesigned the company website and wrote
							a custom responsive Wordpress template for
							it.
							&nbsp;
							Converted previous designs into modern
							UX/UI experiences, and static HTML pages
							into dynamically populated views using PHP
							templating.
							&nbsp;
							Went through the same process for multiple
							company blogs and minisites."
					/>
				<ExperienceBlock
						company="Seeds of Peace"
						title="Communications Intern"
						date="January 2012-June 2012"
						description="Designed graphics and ads including
							one for Gotham Magazine, using
							Creative Suite.
							&nbsp;
							Transferred of content from the old
							site design to the new one.
							&nbsp;
							Built out basic page layouts for the
							new site using HTML and CSS."
					/>
			</div>
		);
	}
});

module.exports = Experience;
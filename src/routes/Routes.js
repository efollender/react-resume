const React = require('react');
const Router = require('react-router');
const { Route, DefaultRoute, RouteHandler, Link } = Router;
const App =  require('../components/Main');
const Resume = require('../components/resume/Resume');
const Header = require('../components/resume/Header');
const Experience = require('../components/resume/Experience');
const Print =  require('../components/Print');
const Skills = require('../components/resume/Skills');

module.exports = (
	<Route name="main" path="/" handler={App}>
		<Route name="resume" path="/" handler={Resume}>
			<Route name="header" path='/' handler={Header}/>
			<Route name="experience" path="/experience" handler={Experience}/>
			<Route name="skills" path="/skills" handler={Skills}/>
		</Route>
		<Route name="print" path="/print" handler={Print} />
	</Route>
);
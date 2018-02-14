/*
 * Projects listing
 */

let projects = [
	{
		id: 'mcpa',
		name: 'Marin County Psychological Association',
		desc: ['Built back & front ends for their member registration & renewal applications, in addition to event Registration pages utilizing Square Checkout as their merchant service provider.'],
		date: 'February 2018',
		websites: ['https://mcpapayments.azurewebsites.net/paymentForm.aspx','https://mcpaevent.azurewebsites.net/eventRegistration.aspx'],
		tags: ['ASP.NET','Visual Basic','Square']
	},
	{
		id: 'friendfinder',
		name: 'FriendFinder',
		desc: [
			'This app requests the client answer 10 questions and then matches the client with their \'match\' which is a json file prepopulated with silly characters.'
		],
		date: '2018',
		github: 'https://github.com/xanimo/friendfinder',
		weight: 2,
		websites: ['https://friendshowmanyofushavethem.herokuapp.com'],
		tags: ['body-parser', 'Node.js', 'express', 'path']
	},
	{
		id: 'catchoftheday',
		name: 'Catch Of The Day',
		desc: ['Finished app from Wes Bos\'s React For Beginners tutorial demonstrating an admin, order and front page for a Fish Monger'],
		github: 'https://github.com/xanimo/off-the-hook',
		date: '2018',
		websites: ['https://catch-of-the-day-111.firebaseapp.com'],
		tags: ['firebase','react','es6']
	},
	{
		id: 'bamazon',
		name: 'Bammer Amazon',
		desc: [
			'Node.js command-line application emulating a simple Amazon store which stores, retrieves and updates products from a MySql database.'],
		github: 'https://github.com/xanimo/bamazon',
		date: '2018',
		tags: ['Node.js', 'MySql', 'Amazon']
	},
	{
		id: 'constructor-hangman',
		name: 'Constructor Hangman',
		desc: [
			'Hangman built using Node.js and javascript constructors. '],
		date: '2018',
		github: 'https://github.com/xanimo/constructor-hangman',
		tags: ['Hangman', 'game', 'Node.js'],
		weight: 1
	},
	{
		id: 'liri-node-app',
		name: 'LIRI',
		date: '2018',
		desc: ['Command line Language Interpretation and Recognition Interface built in Node.js'],
		tags: ['command-line','LIRI','Twitter','Spotify','OMDB'],
		github: 'https://github.com/xanimo/liri-node-app'
	},
	{
		id: 'jkan',
		name: 'JKAN',
		desc: ['A lightweight, backend-free open data portal, powered by Jekyll'],
		date: '2017',
		tags: ['jekyll','github','open data'],
		github: 'https://github.com/xanimo/jkan',
		websites: ['https://xanimo.github.io/jkan/index.html']
	},
			{
		id: 'todo-list-sequelize',
		name: 'Todo List Sequelize',
		desc: ['A todo list app using sequelize.'],
		date: '2017',
		tags: ['sequelize','MySql'],
		github: 'https://github.com/xanimo/todo-list-sequelize'
	},
					{
				{
		id: 'link-sf',
		name: 'Link-Oakland',
		desc: ['Leveraged the Zendesk Link-sf repository and deployed to firebase for UC Berkeley Coding Bootcamp\'s first project December 2017.  R & D for Open Source HSDA applications.'],
		date: '2017',
		tags: ['sequelize','MySql'],
		github: 'https://github.com/xanimo/link',
					websites: ['https://link-ucb.firebaseapp.com']
	},
	{
		id: 'bestlilporkhouse',
		name: 'Best Lil\' Porkhouse',
		desc: ['Built both back & front end.  Entire site is dynamic including layout and content which is enabled by leveraging master pages and feeding into literal tags with sql datareaders.'],
		date: '2013-Present',
		tags: ['ASP.NET','Visual Basic','jQuery','MSSQL'],
		websites: ['http://bestlilporkhouse.com']
	},
	{
		id: 'bluemafia',
		name: 'Blue Mafia',
		desc: ['Website template built for friend and author, Timothy Tolka, in preperation of his book launch titled Blue Mafia'],
		date: 'February 2018',
		tags: ['ASP.NET','Visual Basic','jQuery','MSSQL'],
		websites: ['https://bluemafia.azurewebsites.net']
	}
];


/*
 * Sort and return
 */
function compareDates(a, b) {
	// current year
	const year = new Date().getFullYear();
	// base year - when I started development
	const baseYear = 2013 - 1;

	// date value generator
	const fd = (date) => {
		if (date.indexOf('present') > -1)
			return year - baseYear + 1; // largest, so +1
		else {
			for (let yr = year; yr > baseYear; yr--) {
				if (date.indexOf(yr.toString().substring(3)) > -1) {
					return yr - baseYear;
				}
			}
		}
	};

	let wta = fd(a.date) + (a.weight || 0);
	let wtb = fd(b.date) + (b.weight || 0);

	if (wta < wtb) {
		return 1;
	} else if (wta > wtb) {
		return -1;
	} else {
		// a comes before b in original array
		// let comp = (a.weight || 5) <= (b.weight || 5);
		return -1; // (comp) ? 1 : -1;
	}
}

projects.sort(compareDates);

export default projects;

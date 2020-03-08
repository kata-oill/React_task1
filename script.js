var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'https://cdn-3.cdp.pl/media/catalog/product/cache/1/image/600x/17f82f742ffe127f42dca9de82fb58b1/1/3/13916_0.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o królu sawanny',
		img: 'https://fwcdn.pl/fpo/63/16/776316/7892306.3.jpg'
	},
	{
		id: 3,
		title: 'Avatar',
		desc: 'Film fantasy',
		img: 'https://static.posters.cz/image/750/plakaty/avatar-limited-ed-couple-i7199.jpg'
	},
	{
		id: 4,
		title: 'Włladca Pierścieni',
		desc: 'Film o podróży Bilbo Bagginsa',
		img: 'https://mb.web.sapo.io/7622ca43ac86cc2d41b890d3488599cc2e80e26f.jpg'
	}

];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
	);
});

var element =
	React.createElement ('div', {},
		React.createElement('h1', {}, 'List filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));
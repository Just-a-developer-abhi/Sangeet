
const url = 'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre=POP&limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60c0123643mshfb67fe000fbc19dp18fa29jsn2d3378005f84',
		'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
//Search bar funtionality
function search(query, engine)
{
	query = query.replace(/ /g, '+', query);
	switch (engine)
	{
		case 'google':
		default:
			var url = 'https://www.google.com/search?q=' + query;
		break;
		case 'youtube':
			var url = 'https://www.youtube.com/results?search_query=' + query;
		break;
		case 'wa':
			var url = 'http://www.wolframalpha.com/input/?i=' + query;
		break;
		case 'wiki':
			var url = 'http://en.wikipedia.org/w/index.php?search=' + query;
		break;
		case 'imdb':
			var url = 'http://www.imdb.com/find?q=' + query + '&s=tt';
		break;
	}
		window.location.replace(url);
}

$(function()
{
	$('#searchForm input, #searchForm select').keydown(function(e) {
	  if (e.keyCode == 13){
		e.preventDefault();
		var query = $('#searchForm input').val();
		var engine = $('#searchForm select option:selected').val();
		search(query, engine);
	  }
	});
});
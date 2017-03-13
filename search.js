

javascript:void(function() {
	var query = prompt('multi-word search');
	var keywords = query.split(' ');
   	var posts = document.getElementsByClassName("athing");
   	var results = [];

	for (var i = 0; i < posts.length; i++) {
		var matches = 0;
		for (var j = 0; j < keywords.length; j++) {
			if (posts[i].innerText.toLowerCase().indexOf(keywords[j].toLowerCase()) > -1) {
				matches++;
			}
		}
		if (matches == keywords.length) {
			results.push(posts[i]);	
		}
	}

	var addTapHandler = function(post) { 
		post.onclick = function() {
			var idx = results.indexOf(e);
			var nextIdx = idx + 1;
			var nextPost = results[nextIdx];
			nextPost.scrollIntoView()
		}
	};

	for (var i = 0; i < results.length; i++) {
		results[i].style.backgroundColor = "orange";
		addTapHandler(results[i]);
    	results[0].scrollIntoView();
	}
}())



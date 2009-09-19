$().ready(function() {
	if(token = getToken()){
		initSearch(token);
	}

	wireEvents();
});


function submitForm(){
	$('#search-btn').click();
}

function wireEvents(){
	$('#book_search_author_id').change(function(){
		submitForm();
	});	
	$('#book_search_genre_id').change(function(){
		submitForm();
	});		
}

function getToken(){
	return window.location.hash.replace("#","");
}

function setToken(token){
	window.location.hash = token;
}

function clearToken(){
	window.location.hash = "";
}

function initSearch(token){
	$.get("/book_searches/" + token, {  },
	  function(data){
			eval(data);
	  }
	);
}




// Do whenever an Ajax event occurs
$(document).ajaxSend(function(){
	$('#prog').show();
});

// Do whenever an Ajax event stops
$(document).ajaxStop(function(){
	$('#prog').hide();
});


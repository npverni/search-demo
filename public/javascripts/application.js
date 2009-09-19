$().ready(function() {
	var token = getToken();
	if(token){
		initSearch(token);
	}
});

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


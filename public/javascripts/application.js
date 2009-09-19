$().ready(function() {

	$('#search-form').ajaxForm({
			type: 'GET',
//			beforeSubmit: beforeSearch,
//			error: ajaxError,			
	    success: function(response) { 
//	  		eval(response);
	//			afterSearch();	
	    }
	});


	init();
});

function init(){
	var token = getToken();
	if(!token){
		//createToken();
	}else{
		initSearch(token);
	}
}

function getToken(){
	return readCookie("token");
}

function setToken(token){
	createCookie("token",token,8); 
}

function clearToken(){
	eraseCookie("token");
}


function createToken(){
	$.post("/book_searches", {  },
	  function(data){
			setToken(data);
			hydrate();
	  }
	);
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


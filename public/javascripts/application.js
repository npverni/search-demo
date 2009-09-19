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


});

// Do whenever an Ajax event occurs
$(document).ajaxSend(function(){
	$('#prog').show();
});

// Do whenever an Ajax event stops
$(document).ajaxStop(function(){
	$('#prog').hide();
});
var people = {
	ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  	},	

  	getPeople: function (callback) {
    this.ajax({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/users',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }, callback);
  }
};

$(function() {
  var callback = function callback(error, data) {
    if (error) {
      console.error(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };


  $('#submit-button').on('click', function(event) {
	event.preventDefault();
	people.getPeople(
		function(err, data){
			if (err) {
				console.log(err);
			};
			if (data){
				console.log(data);
			}
		});

});
});
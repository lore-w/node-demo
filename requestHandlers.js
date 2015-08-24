var exec = require('child_process').exec;
var querystring = require('querystring');

function start (response, postData) {
	console.log('request handler "start" was called');

	var body = '<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">' +
	'</head>' +
	'<body>' +
	'<form action="/upload" method="post">' +
	'<textarea name="text" rows="20" cols="50"></textarea><br />' +
	'<input type="submit" value="submit" />' +
	'</form>' +
	'</body>' +
	'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload (response, postData) {
	console.log('request handler "upload" was called');
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You's sent " + querystring.parse(postData).text);
	response.end();
}

exports.start = start;
exports.upload = upload;
var exec = require('child_process').exec;

function start () {
	console.log('request handler "start" was called');
	//阻塞例子
	function sleep (milliSeconds) {
		var startTime = new Date().getTime();
		var newTime = new Date().getTime();
		while (newTime < startTime + milliSeconds) {
			newTime = new Date().getTime();
		};
	}
	sleep(10000);
	return "Hello Start";

	//非阻塞例子
	/*var content = 'EMPTY';
	exec("ls -lah",function (err, stdout, stderr) {
		content = stdout;
	});

	return content;*/
}

function upload () {
	console.log('request handler "upload" was called');
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
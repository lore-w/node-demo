function route (handle, pathname) {
	console.log('about to router a request for ' + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	}else {
		console.log('no request handle found for ' + pathname);
		return "404 Not found";
	}
}
exports.route = route;
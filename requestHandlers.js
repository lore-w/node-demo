var fs = require('fs');
var formidable = require('formidable');

function start(response) {
    var body;

    console.log('request handler "start" was called');

    body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post" enctype="multipart/form-data">' +
    '<input type="file" name="upload" multiple = "multiple" />' +
    '<input type="submit" value="submit" value="upload" />' +
    '</form>' +
    '</body>' +
    '</html>';

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}

function upload(response, request) {
    var form;

    console.log('request handler "upload" was called');
    form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(request, function (error, fields, files) {
        console.log('parsing done');
        fs.renameSync(files.upload.path, 'c:/temp/grunt.jpg');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('received image: <br />');
        response.write('<img src="/show" />');
        response.end();
    });
}

function show(response) {
    console.log('Request handler "show" was called');
    fs.readFile('c:/temp/grunt.jpg', 'binary', function (error, file) {
        if (error) {
            response.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            response.write(error + '\n');
            response.end();
        } else {
            response.writeHead(200, {
                'Content-Type': 'image/png'
            });
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
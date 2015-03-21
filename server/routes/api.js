module.exports = function(app) {

  var fs = require('fs');
  var path = require('path');

  var filePath = path.join(__dirname, '../model/comments.json');

  app.get('/api/comments', function(req, res) {

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
        if (!err) {
          res.writeHead(200, {'Content-Type': 'text/json'});
          res.write(data);
          res.end();
        } else {
            console.log(err);
        }

    });

  });

  app.post('/api/comments', function(req, res) {

    fs.readFile(filePath, function(err, data) {
      var comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile(filePath, JSON.stringify(comments, null, 4), function(err) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-cache');
        res.send(JSON.stringify(comments));
      });
    });

  });
};

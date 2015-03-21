module.exports = function(app) {
  var comments = [
    { "author": "Roman Stremedlovskyi", "text": "This is REACT" }
  ];

  app.get('/api/comments', function(req, res) {
    res.json(comments);
  });

  app.post('/api/comments', function(req, res) {
    comments.push(req.body);
    res.json(comments);
  });
};

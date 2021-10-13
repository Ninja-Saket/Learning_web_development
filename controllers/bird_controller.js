module.exports.home = function (req, res) {
  return res.send("<h1>Hey this is my home page</h1>");
};
module.exports.color = function (req, res) {
  return res.send("<h1>Hey my color is white</h1>");
};

module.exports.weight = function (req, res) {
  return res.send("<h1>Hey my weight is 100kg</h1>");
};

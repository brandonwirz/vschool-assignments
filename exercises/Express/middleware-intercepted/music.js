function music(req, res, next) {
  req.music = "Music blasting!!!";
  next();
}

module.exports = {
  music
}

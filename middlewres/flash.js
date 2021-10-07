module.exports = function (request, response, next) {
  request.flash = function (type, content) {
    if (request.session.flach === undefined) {
      request.session.flash = {}
    }
    request.session.flash[type] = content
  }
  next()
}
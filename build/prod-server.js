var express = require('express')
var app = express()
var fallback = require('express-history-api-fallback')
var compression = require('compression')
app.engine('html', require('ejs').__express);

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')())
// serve pure static assets

app.use(compression({filter: shouldCompress}))

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use('/static', express.static('./dist/static'))
// app.get ('*', function (req, res) {
//   console.log('test')
//   res.render('../dist/index.html')
// })
app.use(fallback('./dist/index.html', { root: './'}))

var port = process.env.PORT || 5000
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
})

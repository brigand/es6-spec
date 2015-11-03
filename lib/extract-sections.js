'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

require('babel/polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _dataTocMinJson = require('../data/toc.min.json');

var _dataTocMinJson2 = _interopRequireDefault(_dataTocMinJson);

var $ = _cheerio2['default'].load(_fs2['default'].readFileSync('spec.html', 'utf8'));
var secs = $('[id]');
var secById = [].reduce.call(secs, function (acc, sec) {
  acc[$(sec).attr('id')] = sec;
  return acc;
}, {});

_dataTocMinJson2['default'].forEach(function (_ref) {
  var id = _ref.id;
  var text = _ref.text;

  var $sec = secById[id];
  $sec = $($sec);

  if (!$sec || !$sec[0]) {
    console.log('MISS', id, $sec[0]);
    return;
  }

  var html = $sec.html();

  // we use real html paths instead of hashes
  html = html.replace(/href="#([^"]+)"/g, function (m, href) {
    return 'href="/sec/' + href + '.html"';
  });

  _fs2['default'].writeFile('data/sec/' + id + '.json', JSON.stringify({
    id: id,
    html: html
  }));
});
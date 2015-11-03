'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

require('babel/polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var $ = _cheerio2['default'].load(_fs2['default'].readFileSync('spec.html', 'utf8'));
var toc = $('section[id] h1');

var res = [].map.call(toc, function (item) {
  var anchor = $(item).find('span.secnum > a')[0];

  var _ref = anchor || {};

  var children = _ref.children;

  if (!children || !children[0] || !item.children[1]) {
    var attribs = item.attribs;

    console.log();
    return;
  }
  var text = $(item.children[1]).text().trim().split('\n').pop().trim();
  var anchor = $(item).find('a')[0];
  var href = anchor.attribs.href;

  var id = href.replace(/#/g, '');
  if (!text || !id) return;

  return {
    text: text, id: id
  };
}).filter(Boolean);

_fs2['default'].writeFile('data/toc.json', JSON.stringify(res, null, 4), 'utf8');
_fs2['default'].writeFile('data/toc.min.json', JSON.stringify(res), 'utf8');
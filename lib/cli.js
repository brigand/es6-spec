'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dataTocJson = require('../data/toc.json');

var _dataTocJson2 = _interopRequireDefault(_dataTocJson);

var _fuzzy = require('fuzzy');

var _fuzzy2 = _interopRequireDefault(_fuzzy);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var search = process.argv[2];

if (!search) {
  console.error('Must provide a query as the first argument');
  process.exit(7);
}

console.error('Searching for ' + JSON.stringify(search));
var match = _fuzzy2['default'].filter(search, _dataTocJson2['default'], {
  extract: function extract(x) {
    return x.text;
  }
});

var item = match[0];
if (!item) {
  console.error('No matches for ' + JSON.stringify(search));
  process.exit(1);
}

var file = _fs2['default'].readFileSync(__dirname + '/../data/sec/' + item.original.id + '.json', 'utf8');

var _JSON$parse = JSON.parse(file);

var html = _JSON$parse.html;

console.log(html);
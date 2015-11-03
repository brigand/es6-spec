'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel/polyfill');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var fs = require('fs');

global.Promise = _bluebird2['default'];
_bluebird2['default'].promisifyAll(fs);

var indexHtml = fs.readFileSync('src/index.html', 'utf8');
function makePage(content) {
  var _indexHtml$split = indexHtml.split('<!--PLACE-->');

  var _indexHtml$split2 = _slicedToArray(_indexHtml$split, 2);

  var before = _indexHtml$split2[0];
  var after = _indexHtml$split2[1];

  return before + content + after;
}

function processFile(path) {
  var content, data;
  return regeneratorRuntime.async(function processFile$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return regeneratorRuntime.awrap(fs.readFileAsync('data/' + path + '.json', 'utf8'));

      case 2:
        content = context$1$0.sent;
        data = JSON.parse(content);
        context$1$0.next = 6;
        return regeneratorRuntime.awrap(fs.writeFileAsync(path + '.html', makePage(data.html), 'utf8'));

      case 6:
        console.log('Finished ' + path);

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function main() {
  var files, ps, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, path;

  return regeneratorRuntime.async(function main$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return regeneratorRuntime.awrap(fs.readdirAsync('data/sec'));

      case 2:
        files = context$1$0.sent;
        ps = [];
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 7;

        for (_iterator = files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          file = _step.value;
          path = 'sec/' + file.split('.json').shift();

          ps.push(processFile(path));
        }
        context$1$0.next = 15;
        break;

      case 11:
        context$1$0.prev = 11;
        context$1$0.t0 = context$1$0['catch'](7);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 15:
        context$1$0.prev = 15;
        context$1$0.prev = 16;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 18:
        context$1$0.prev = 18;

        if (!_didIteratorError) {
          context$1$0.next = 21;
          break;
        }

        throw _iteratorError;

      case 21:
        return context$1$0.finish(18);

      case 22:
        return context$1$0.finish(15);

      case 23:
        context$1$0.next = 25;
        return regeneratorRuntime.awrap(_bluebird2['default'].all(ps));

      case 25:
        console.log('Finished ' + ps.length);

      case 26:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[7, 11, 15, 23], [16,, 18, 22]]);
}

main();
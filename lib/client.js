'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dataTocMinJson = require('../data/toc.min.json');

var _dataTocMinJson2 = _interopRequireDefault(_dataTocMinJson);

var _fuzzy = require('fuzzy');

var _fuzzy2 = _interopRequireDefault(_fuzzy);

var $ = require('jquery');
window.$ = $;

var els = ['Root', 'SearchWrapper', 'SearchInput', 'SearchItems'].reduce(function (o, key) {
  o[key] = $('.' + key);
  return o;
}, {});

els.SearchInput.on('input', function () {
  var val = els.SearchInput.val();
  console.log(val);
  updateItems(val);
});

els.SearchInput.focus();

$(document).on('click', function (e) {
  if (e.target.href) {
    alert(e.target.href);
  }
});

var searchItemLimit = 20;
function makeItem(name, id) {
  var wrapper = $('<div>').addClass('SearchItem');
  var link = $('<a>', {
    'class': 'SearchLink',
    href: '/sec/' + id + '.html'
  });
  link.text(name);

  link.appendTo(wrapper);
  console.log(name, id, wrapper);

  return wrapper;
}

function updateItems(query) {
  requestAnimationFrame(function () {
    var matches = _fuzzy2['default'].filter(query, _dataTocMinJson2['default'], {
      extract: function extract(x) {
        return x.text;
      }
    });

    els.SearchItems.html('');
    var items = matches.map(function (x) {
      return x.original;
    });
    var trimmed = 0;

    if (items.length > searchItemLimit) {
      items = items.slice(0, searchItemLimit);
      trimmed = items.length - searchItemLimit;
    }

    console.log(items);
    items.forEach(function (item) {
      var el = makeItem(item.text, item.id);
      $(el).appendTo(els.SearchItems);
    });

    if (trimmed) {
      var note = $('<div>').text('and ' + trimmed + ' more');
      $(note).appendTo(els.SearchItems);
    }
  });
}

function fetchHtml(id, cb) {
  $.getJSON('/data/sec/' + id + '.json', function (res) {
    cb(null, res.html);
  });
}
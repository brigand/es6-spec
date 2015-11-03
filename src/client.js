import toc from '../data/toc.min.json';
import fuzzy from 'fuzzy';
var $ = require('jquery');
window.$ = $;

var els = [
  'Root',
  'SearchWrapper',
  'SearchInput',
  'SearchItems',
]
.reduce((o, key) => {
  o[key] = $('.' + key);
  return o;
}, {});

els.SearchInput.on('input', () => {
  var val = els.SearchInput.val();
  console.log(val);
  updateItems(val);
});

els.SearchInput.focus();

$(document).on('click', (e) => {
  if (e.target.href) {
    e.preventDefault();
    location.href = '/es6-spec/' + e.target.pathname;
  }
});

let searchItemLimit = 20;
function makeItem(name, id){
  var wrapper = $('<div>').addClass('SearchItem');
  var link = $('<a>', {
    class: 'SearchLink', 
    href: `/sec/${id}.html`,
  });
  link.text(name);

  link.appendTo(wrapper);
  console.log(name, id, wrapper);

  return wrapper;
}

function updateItems(query){
  requestAnimationFrame(() => {
    var matches = fuzzy.filter(query, toc, {
      extract: (x) => x.text,
    });

    els.SearchItems.html('');
    var items = matches.map((x) => x.original);
    var trimmed = 0;

    if (items.length > searchItemLimit) {
      items = items.slice(0, searchItemLimit);
      trimmed = items.length - searchItemLimit;
    }

    console.log(items);
    items.forEach((item) => {
      var el = makeItem(item.text, item.id);
      $(el).appendTo(els.SearchItems);
    });

    if (trimmed) {
      const note = $('<div>').text(`and ${trimmed} more`);
      $(note).appendTo(els.SearchItems);
    }
  });
}

function fetchHtml(id, cb){
  $.getJSON('data/sec/' + id + '.json', (res) => {
    cb(null, res.html);
  });
}


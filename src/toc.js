import cheerio from 'cheerio';
import 'babel/polyfill';
import fs from 'fs';

var $ = cheerio.load(fs.readFileSync('spec.html', 'utf8'));
var toc = $('section[id] h1');

var res = [].map.call(toc, (item) => {
  var anchor = $(item).find('span.secnum > a')[0];
  var {children} = anchor || {};
  if (!children || !children[0] || !item.children[1]) {
    var {attribs} = item;
    console.log();
    return;
  }
  var text = $(item.children[1]).text().trim().split('\n').pop().trim();
  var anchor = $(item).find('a')[0];
  var {href} = anchor.attribs;

  var id = href.replace(/#/g, '');
  if (!text || !id) return;

  return {
    text, id,
  };
}).filter(Boolean);

fs.writeFile('data/toc.json', JSON.stringify(res, null, 4), 'utf8');
fs.writeFile('data/toc.min.json', JSON.stringify(res), 'utf8');


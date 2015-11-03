import cheerio from 'cheerio';
import 'babel/polyfill';
import fs from 'fs';
import toc from '../data/toc.min.json';

var $ = cheerio.load(fs.readFileSync('spec.html', 'utf8'));
var secs = $('[id]');
var secById = [].reduce.call(secs, (acc, sec) => {
  acc[$(sec).attr('id')] = sec;
  return acc;
}, {});

toc.forEach(({id, text}) => {
  var $sec = secById[id]; 
  $sec = $($sec);

  if (!$sec || !$sec[0]) {
    console.log('MISS', id, $sec[0]);
    return;
  }

  var html = $sec.html();

  // we use real html paths instead of hashes
  html = html.replace(/href="#([^"]+)"/g, (m, href) => {
    return `href="/sec/${href}.html"`;
  });

  fs.writeFile('data/sec/' + id + '.json', JSON.stringify({
    id,
    html,
  }));
});


import toc from '../data/toc.json';
import fuzzy from 'fuzzy';
import fs from 'fs';

var search = process.argv[2];

if (!search) {
  console.error('Must provide a query as the first argument');
  process.exit(7);
}

console.error('Searching for ' + JSON.stringify(search));
var match = fuzzy.filter(search, toc, {
  extract: (x) => x.text,
});

var item = match[0];
if (!item) {
  console.error('No matches for ' + JSON.stringify(search));
  process.exit(1);
}

var file = fs.readFileSync(__dirname + '/../data/sec/' + item.original.id + '.json', 'utf8');
var {html} = JSON.parse(file);

console.log(html);

